

// This is new code. Add this.
// export const getTip = () => {
//     return tipCollection
// }

export const getTip = () => {
    return fetch("http://localhost:9099/tips")
      .then((response) => response.json())
      ;
  };