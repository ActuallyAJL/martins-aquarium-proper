

// This is new code. Add this.
// export const getLocation = () => {
//     return locationCollection
// }

export const getLocation = () => {
    return fetch("http://localhost:9099/locations")
      .then((response) => response.json())
      ;
  };