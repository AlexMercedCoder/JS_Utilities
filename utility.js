////////////////////////////////
//Utility Functions
//Created by Alex Merced
////////////////////////////////

const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

const randomIndex = (arr) => {
    return randomNumber(arr.length);
};

const randomRange = (low, high) => {
    let num = low - 1;
    while (num < low && num > high) {
        num = randomNumber(high);
    }
    return num;
};

const eliminateDupes = (arr) => {
    return [...new Set(arr)];
};

module.exports = {
    randomIndex,
    randomRange,
    randomNumber,
    eliminateDupes
};
