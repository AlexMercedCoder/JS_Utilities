const fetch = require('node-fetch');

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
    while (num < low || num > high) {
        num = randomNumber(high);
    }
    return num;
};

const eliminateDupes = (arr) => {
    return [...new Set(arr)];
};

/////////////////
//Fetcher class
//Purpose: Api fetching Utility
/////////////////

class Fetcher {
    constructor(url) {
        this.url = url;
    }

    call = async (callback, config, urlExt = '') => {
        const response = await fetch(`${this.url}${urlExt}`, config);
        const json = await response.json();
        this.lastCall = await json;
        await callback(json);
    };

    recall = () => {
        return this.lastCall;
    };
}

module.exports = {
    randomIndex,
    randomRange,
    randomNumber,
    eliminateDupes,
    Fetcher
};
