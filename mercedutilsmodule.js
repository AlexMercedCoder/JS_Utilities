////////////////////////////////
//Utility Functions
//Created by Alex Merced
////////////////////////////////

export const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

export const randomIndex = (arr) => {
    return randomNumber(arr.length);
};

export const randomRange = (low, high) => {
    let num = low - 1;
    while (num < low || num > high) {
        num = randomNumber(high);
    }
    return num;
};

export const eliminateDupes = (arr) => {
    return [...new Set(arr)];
};

export const countWords = (string) => {
    const newObj = {};
    const stringArray = string.split(' ');
    for (word of stringArray) {
        newObj[word] = stringArray.filter((value) => value === word).length;
    }
    return newObj;
};

export const highWordCount = (string) => {
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

export class Fetcher {
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

export class PowerSet {
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

////////////////////////////////
//SUPER ARRAY
//Created by Alex Merced
////////////////////////////////

export const superArray = () => {
    Array.prototype.random = function() {
        const randomIndex = Math.floor(Math.random() * this.length);

        const RandomValue = this[randomIndex];
        return RandomValue;
    };

    Array.prototype.remove = function(callback) {
        const newArray = [];
        for (i = 0; i < this.length; i++) {
            if (callback(this[i], i)) {
            } else {
                newArray.push(this[i]);
            }
        }
        return newArray;
    };

    Array.prototype.undupe = function() {
        return [...new Set(this)];
    };

    Array.prototype.randElim = function() {
        return this.splice(randomIndex(this), 1);
    };

    Array.prototype.leaveOne = function() {
        const newArray = [];
        while (this.length > 1) {
            newArray.push(this.randElim()[0]);
        }
        return newArray;
    };

    Array.prototype.leaveSome = function(num) {
        const newArray = [];
        while (this.length > num) {
            newArray.push(this.randElim()[0]);
        }
        return newArray;
    };

    Array.prototype.findRemove = function(value) {
        return this.splice(this.findIndex((val) => val === value), 1);
    };

    Array.prototype.addLength = function(length, value) {
        while (this.length < length) {
            this.push(value);
        }
        return this;
    };

    Array.prototype.lessLengthRight = function(length) {
        const removed = [];
        while (this.length > length) {
            removed.push(this.pop());
        }
        return removed;
    };

    Array.prototype.lessLengthLeft = function(length) {
        const removed = [];
        while (this.length > length) {
            removed.push(this.shift());
        }
        return removed;
    };

    Array.prototype.someMore = function(callback, number) {
        let counter = this.filter(callback).length;
        return counter >= number;
    };

    Array.prototype.everyLess = function(callback, number) {
        let counter = this.remove(callback).length;
        return counter <= number;
    };

    Array.prototype.mapToObject = function(callback) {
        const newObj = {};
        for (i = 0; i < this.length; i++) {
            const propToBe = callback(this[i], i);
            if (propToBe instanceof Array && propToBe.length >= 2) {
                newObj[propToBe[0]] = propToBe[1];
            }
        }
        return newObj;
    };

    Array.prototype.mapToMap = function(callback) {
        const newMap = new Map();
        for (i = 0; i < this.length; i++) {
            const propToBe = callback(this[i], i);
            if (propToBe instanceof Array && propToBe.length >= 2) {
                newMap.set(propToBe[0], propToBe[1]);
            }
        }
        return newMap;
    };

    Array.prototype.mapToSet = function(callback) {
        const newSet = [];
        for (i = 0; i < this.length; i++) {
            newSet.push(callback(this[i], i));
        }
        return new Set(newSet);
    };

    Array.prototype.mapToUnique = function(callback) {
        const newSet = [];
        for (i = 0; i < this.length; i++) {
            newSet.push(callback(this[i], i));
        }
        return [...new Set(newSet)];
    };

    Array.prototype.squish = function() {
        const removedValues = [];
        removedValues.push(this.shift());
        removedValues.push(this.pop());
        return removedValues;
    };

    Array.prototype.shuff = function() {
        const original = [...this];
        const shuffled = [];
        for (i = 0; i < this.length; i++) {
            shuffled.push(original.randElim());
        }

        return shuffled.flat();
    };

    Array.prototype.toStrings = function() {
        return this.map((value) => String(value));
    };

    Array.prototype.toNums = function() {
        return this.map((value) => Number(value));
    };

    Array.prototype.toBools = function() {
        return this.map((value) => Boolean(value));
    };

    Array.prototype.iPop = function() {
        const newArr = [...this];
        newArr.pop();
        return newArr;
    };

    Array.prototype.iShift = function() {
        const newArr = [...this];
        newArr.shift();
        return newArr;
    };

    Array.prototype.iPush = function(value) {
        const newArr = [...this];
        newArr.push(value);
        return newArr;
    };

    Array.prototype.iUnshift = function(value) {
        const newArr = [...this];
        newArr.unshift(value);
        return newArr;
    };

    Array.prototype.iSplice = function(index, amount) {
        const newArr = [...this];
        newArr.splice(index, amount);
        return newArr;
    };
};
