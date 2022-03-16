import { getTip } from "./TipData.js";
import { Tip } from "./Tip.js";

export const TipList = () => {
  const contentElement = document.querySelector(".tipList");
  const tips = getTip();
  let tipHTMLRepresentation = "";
  for (const oneThingFromTheSea of tips) {
    tipHTMLRepresentation += Tip(oneThingFromTheSea);
  }
  contentElement.innerHTML += `
         ${tipHTMLRepresentation}
     `;
};
