function makeCopyButton(text: string, classes: string[] = []): HTMLButtonElement {
    const copyButton = document.createElement("button");
    copyButton.innerHTML = "📄";
    copyButton.title = "Copy to clipboard";
    copyButton.classList.add("copy-button", ...classes);
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(text); 
    });

    return copyButton;
}

export function formatTranslationSection(targetTranslations: string[]): void {
    const translationColumns = document.getElementsByClassName(
      "translations-columns"
    )[0];
    
    if (translationColumns) {
      const translations = Array.from(translationColumns?.children || []).filter(
        (node) => {
          for (const language of targetTranslations) {
            if (node.innerHTML?.startsWith(language)) {
                return true;
            }
          }
  
          return false;
        }
      ) as Array<HTMLLIElement>;

      const newTranslations = translations
      .map((element) => {
          const newElement = element.cloneNode(true);
          const translation = element.innerText.split(":")[1];
          const copyButton = makeCopyButton(translation, ["ml-5"]);
          newElement.appendChild(copyButton);
          
          return newElement;
      });

      translationColumns.replaceChildren(...newTranslations);
    }
  }
  