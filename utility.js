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

const countWords = (string) => {
    const newObj = {};
    const stringArray = string.split(' ');
    for (word of stringArray) {
        newObj[word] = stringArray.filter((value) => value === word).length;
    }
    return newObj;
};

const highWordCount = (string) => {
    const stringObj = countWords(string);
    const objKeys = Object.keys(stringObj);
    const objValues = Object.values(stringObj);
    const index = objValues.findIndex(
        (value) => value === [...objValues].sort()[objValues.length - 1]
    );
    return [objKeys[index], objValues[index]];
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

/////////////////
//PowerSet
//Purpose: Leveraging the benefits of sets and arrays
/////////////////

class PowerSet {
    constructor(arr) {
        this.arr = [...new Set(arr)];
        this.set = new Set(arr);
    }

    arrMeth(method, argument) {
        const result = eval(`this.arr.${method}(${argument})`);
        this.arr = [...new Set(this.arr)];
        this.set = new Set(this.arr);
        return result;
    }

    isSuperset(subset) {
        for (let elem of subset.set) {
            if (!this.set.has(elem)) {
                return false;
            }
        }
        return true;
    }

    union(setB) {
        return new PowerSet([...this.set, ...setB.set]);
    }

    intersection(setB) {
        let _intersection = new Set();
        for (let elem of setB.set) {
            if (this.set.has(elem)) {
                _intersection.add(elem);
            }
        }
        return new PowerSet([..._intersection]);
    }

    symmetricDifference(setB) {
        let _difference = new Set(this.set);
        for (let elem of setB.set) {
            if (_difference.has(elem)) {
                _difference.delete(elem);
            } else {
                _difference.add(elem);
            }
        }
        return new PowerSet([..._difference]);
    }

    difference(setB) {
        let _difference = new Set(this.set);
        for (let elem of setB.set) {
            _difference.delete(elem);
        }
        return new PowerSet([..._difference]);
    }
}

//////EXPORT

module.exports = {
    randomIndex,
    randomRange,
    randomNumber,
    eliminateDupes,
    Fetcher,
    PowerSet,
    countWords,
    highWordCount
};
