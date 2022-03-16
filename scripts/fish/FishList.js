import { getFish } from "./FishData.js";
import { Fish } from "./Fish.js";
import { getMostHolyFish , getSoldierFish , getUnworthy } from './FishFilter.js';

export const FishList = () => {
  const contentElement = document.querySelector(".fishList");
  const fishes = getFish();
  const orderedFishes = getMostHolyFish(fishes).concat(getSoldierFish(fishes)).concat(getUnworthy(fishes));
  let fishHTMLRepresentation = "";
  for (const oneThingFromTheSea of orderedFishes) {
    fishHTMLRepresentation += Fish(oneThingFromTheSea);
  }
  contentElement.innerHTML += `
         ${fishHTMLRepresentation}
     `;
};