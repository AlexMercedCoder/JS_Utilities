////////////////////////////////
//SUPER ARRAY
//Created by Alex Merced
////////////////////////////////

const superArray = (arr) => {
    arr.random = () => {
        const randomIndex = Math.floor(Math.random() * arr.length);

        const RandomValue = arr[randomIndex];
        return RandomValue;
    };

    arr.remove = (callback) => {
        const newArray = [];
        for (i = 0; i < arr.length; i++) {
            if (callback(arr[i], i)) {
            } else {
                newArray.push(arr[i]);
            }
        }
        return superArray(newArray);
    };

    arr.undupe = () => superArray([...new Set(arr)]);

    return arr;
};

module.exports = {
    superArray
};
