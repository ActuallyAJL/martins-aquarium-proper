export const getMostHolyFish = (fishArray) => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []
    for ( let fish of fishArray) {
        if (fish.length % 3 === 0) {
            holyFishArray.push(fish);
        }
    }
    return holyFishArray;
}

export const getSoldierFish = (fishArray) => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiersArray = []
    for (let fish of fishArray) {
        if (fish.length % 5 === 0) {
            soldiersArray.push(fish);
        }
    }
    return soldiersArray;
}

export const getUnworthy = (fishArray) => {
    // Any fish not a multiple of 3 or 5
    const unworthyFishArray = []
    for (let fish of fishArray) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            unworthyFishArray.push(fish);
        }
    }
    return unworthyFishArray;
}