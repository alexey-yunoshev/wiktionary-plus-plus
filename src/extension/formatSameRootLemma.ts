import { getLemmaLevel } from "./data/getLemmaLevel";
import { polishLemmasLevelMap } from "./data/languages/polish";

export interface FormatSameRootLemmasOptions {
  showLemmaLevel?: boolean;
  hideRedLinks?: boolean;
}

function isLemmaLink(element: Element): element is HTMLAnchorElement {
  return (
    (element as HTMLAnchorElement).href !== undefined && element.tagName === "A"
  );
}

export function formatSameRootLemmas({
  hideRedLinks = false,
}: // showLemmaLevel = false,
FormatSameRootLemmasOptions = {}) {
  const titleElement = document.querySelector("dt.fldt-pokrewne");
  if (titleElement === null) {
    return;
  }

  const container = titleElement.parentElement;
  if (container === null) {
    return;
  }
  const sections = document.querySelectorAll("dd.fldt-pokrewne");
  if (sections.length === 0) {
    return;
  }

  const urlsByLevel = new Map<string, string[]>();

  for (const section of sections) {
    let removeNext = 0;
    const newChildren = Array.from(section.children)
      .filter((element) => {
        if (!hideRedLinks) {
          return true;
        }

        if (removeNext !== 0) {
          removeNext -= 1;
          return false;
        }

        if (element.classList.contains("new")) {
          removeNext = 2;
          return false;
        }

        return true;
      })
      .map((element) => {
        element.classList.add("ml-5");
        return element;
      });

    for (const child of newChildren) {
      if (isLemmaLink(child)) {
        const lemma = child.innerText;
        const lemmaLevel = getLemmaLevel(polishLemmasLevelMap, lemma);

        if (lemmaLevel !== undefined) {
            console.log(child.href);
          if (urlsByLevel.has(lemmaLevel)) {
            urlsByLevel.get(lemmaLevel)?.push(child.href);
          } else {
            urlsByLevel.set(lemmaLevel, [child.href]);
          }
        }
      }
    }

    section.replaceChildren(...newChildren);
  }

  if (urlsByLevel.size > 0) {
      const buttons: Array<HTMLButtonElement> = [];

      for (const [level, urls] of urlsByLevel.entries()) {
        const openUrlsButton: HTMLButtonElement = document.createElement("button");
        openUrlsButton.innerText = `Open all ${level} level lemmas`;
    
        openUrlsButton.addEventListener("click", () => {
          for (const url of urls) {
            window.open(url, "_blank");
          }
        });

        buttons.push(openUrlsButton);
      }

      const buttonsContainer = document.createElement("div");
      buttons.sort((a, b) => a.innerText.localeCompare(b.innerText));
      buttonsContainer.replaceChildren(...buttons);
      buttonsContainer.classList.add("root_links_container", "ml-25");
      titleElement.insertAdjacentElement("afterend", buttonsContainer);
  }
}
