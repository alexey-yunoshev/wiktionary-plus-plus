import { BasicAddNoteParams } from "./anki/addNote";
import { AddNoteMessage, MessageType, Messsage } from "./messages";
import { logger } from "./logger";

function makeCopyButton(
  text: string,
  classes: string[] = [],
): HTMLButtonElement {
  const copyButton = document.createElement("button");
  copyButton.innerHTML = "📄";
  copyButton.title = "Copy to clipboard";
  copyButton.classList.add("copy-button", ...classes);
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(text);
  });

  return copyButton;
}

function makeAnkiButton(
  params: BasicAddNoteParams,
  classes: string[] = [],
): HTMLButtonElement {
  const copyButton = document.createElement("button");
  copyButton.innerHTML = "Anki";
  copyButton.title = "Add note to Anki";
  copyButton.classList.add("copy-button", ...classes);
  copyButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({
      payload: params,
      type: MessageType.addNote,
    } as AddNoteMessage);
  });

  return copyButton;
}

export function formatTranslationSection(
  targetTranslations: string[],
  ankiDeckName = "",
): void {
  const translationColumns = document.getElementsByClassName(
    "translations-columns",
  )[0];

  if (translationColumns === undefined) {
    return;
  }

  const translations = Array.from(translationColumns?.children || []).filter(
    (node) => {
      for (const language of targetTranslations) {
        if (node.innerHTML?.startsWith(language)) {
          return true;
        }
      }

      return false;
    },
  ) as Array<HTMLLIElement>;

  const heading = document.getElementById("firstHeading");
  if (!heading) {
    return;
  }
  const lemma = heading.innerText;
  const pronunciation = (
    document.querySelectorAll(
      "span[title^=\"To jest wymowa w zapisie IPA; zobacz hasło IPA w Wikipedii\"].lang-pl",
    )[0] as HTMLSpanElement | undefined
  )?.innerText;

  const newTranslations = translations.map((element) => {
    const newElement = element.cloneNode(true);
    const translation = element.innerText.split(":")[1];
    const copyButton = makeCopyButton(translation, ["ml-5"]);
    newElement.appendChild(copyButton);

    const back = `${pronunciation} ${translation}`;

    const ankiButton = makeAnkiButton({
      back,
      deckName: ankiDeckName,
      front: lemma,
    });

    newElement.appendChild(ankiButton);

    return newElement;
  });

  translationColumns.replaceChildren(...newTranslations);

  chrome.runtime.onMessage.addListener(async (message: Messsage) => {
    switch (message.type) {
      case MessageType.addNoteResponse: {
        if (message.payload.error !== null) {
          logger.error(message.payload.error);
        } else {
          logger.info("Note added");
        }

        break;
      }
      default:
        logger.error(message, `Unexpected message type: ${message.type}`);
    }
  });
}
