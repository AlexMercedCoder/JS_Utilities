////////////////////////////////
//SUPER ARRAY
//Created by Alex Merced
////////////////////////////////

const {
    randomIndex,
    randomRange,
    randomNumber,
    eliminateDupes,
    Fetcher,
    PowerSet,
    countWords,
    highWordCount
} = require('./utility');

const utils = () => {
    return {
        randomIndex,
        randomRange,
        randomNumber,
        eliminateDupes,
        Fetcher,
        PowerSet,
        countWords,
        highWordCount
    };
};

const superArray = () => {
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

module.exports = {
    superArray,
    utils
};
