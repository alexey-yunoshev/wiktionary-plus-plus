import { formatSameRootLemmas } from "./formatSameRootLemma";
import { formatTranslationSection } from "./formatTranslationSection";

const translationLanguagesString = "angielski,białoruski,rosyjski,ukraiński";
const targetTranslations = translationLanguagesString.split(",");

window.onload = () => {
  setTimeout(() => {
    formatSameRootLemmas({
      hideRedLinks: true,
      showLemmaLevel: true,
    });
    formatTranslationSection(targetTranslations, "Polish  ");
  }, 500);
};
