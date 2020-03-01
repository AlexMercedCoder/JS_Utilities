////////////////////////////////
//SUPER ARRAY
//Created by Alex Merced
////////////////////////////////

const {
    randomIndex,
    randomRange,
    randomNumber,
    eliminateDupes
} = require('./utility');

const utils = () => {
    return {
        randomIndex,
        randomRange,
        randomNumber,
        eliminateDupes
    };
};

const superArray = () => {
    Array.prototype.random = function() {
        const randomIndex = Math.floor(Math.random() * this.length);

        const RandomValue = arr[randomIndex];
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
};

module.exports = {
    superArray,
    utils
};
