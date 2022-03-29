import { getLocation } from "./LocationData.js";
import { Location } from "./Location.js";

export const LocationList = () => {
  const contentElement = document.querySelector(".locationList");
  getLocation().then((locations) => {
    let locationHTMLRepresentation = "";
    for (const oneThingFromTheSea of locations) {
      locationHTMLRepresentation += Location(oneThingFromTheSea);
    }
    contentElement.innerHTML += `
    ${locationHTMLRepresentation}
    `;
  });
};
