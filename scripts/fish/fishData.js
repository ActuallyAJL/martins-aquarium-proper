

// This is new code. Add this.
// export const getFish = () => {
//     return fishCollection
// }

export const getFish = () => {
    return fetch("http://localhost:9099/fish")
      .then((response) => response.json())
      ;
  };