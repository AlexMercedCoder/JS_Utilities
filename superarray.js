////////////////////////////////
//SUPER ARRAY
//Created by Alex Merced
////////////////////////////////

const {
    randomIndex,
    randomRange,
    randomNumber,
    eliminateDupes,
    Fetcher
} = require('./utility');

const utils = () => {
    return {
        randomIndex,
        randomRange,
        randomNumber,
        eliminateDupes,
        Fetcher
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
};

module.exports = {
    superArray,
    utils
};
