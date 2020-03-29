const superString = () => {
    String.prototype.words = function() {
        return this.split(' ');
    };

    String.prototype.reverseWords = function() {
        return this.split(' ')
            .reverse()
            .join(' ');
    };

    String.prototype.swapWord = function(target, replace) {
        const theString = this.split(' ');
        const theIndex = theString.findIndex((value) => value === target);
        theString[theIndex] = replace;
        return theString.join(' ');
    };
};

module.exports = {
    superString
};
