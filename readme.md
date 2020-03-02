# Alex Merced's Utilities

---

## AlexMercedCoder.com

This library contain some utility functions.

### installation

#### NPM

npm i mercedutils

```
const {superArray, utils} = require("mercedutils")

superArray(); //add methods to array prototype

const {
    randomIndex,
    randomRange,
    randomNumber,
    eliminateDupes,
    Fetcher,
    SuperSet
} = utils() // makes these utility functions available
```

#### Github

git clone https://github.com/AlexMercedCoder/JS_Utilities.git

```
const {superArray, utils} = require("superArray.js")

superArray(); //add methods to array prototype

const {
    randomIndex,
    randomRange,
    randomNumber,
    eliminateDupes,
    Fetcher,
    SuperSet
} = utils() // makes these utility functions available

```

---

### superArray

---

**superArray() =>** run this function and going forward all the below methods will be available to all your arrays

---

**Array.random() =>** return random element from array

**Array.remove((value, index) => return boolean)** => the opposite of filter, remove elements where the callback function returns true, returns a superArray

**Array.undupe() =>** returns a superArray of the array with duplicates removed

**Array.randElim() =>** eliminates a random element and returns it

**Array.leaveOne()** => Randomly eliminates all but one element from array and returns a superArray of removed elements

**Array.leaveSome(number)** => Randomly eliminates all but a defined number of elements from array and returns a superArray of removed elements

**Array.findRemove(value)** => finds and removes value from array returning the removed value

**Array.addLength(length, value)** => increases array to desired length and fills in additional spots with the value passed.

**Array.lessLengthRight(length)** => removes elements from back of the array till is desired length, returns array of removed values

**Array.lessLengthRight(length)** => removes elements from front of the array till is desired length, returns array of removed values

**Array.someMore((value, index) => return boolean, number)** => returns true if the number of iterations that return true are equal or greater to the number argument

**Array.everyLess((value, index) => return boolean, number)** => returns true if the number of iterations that return false are equal or less to the number argument

**Array.MapToObject((value, index) => return [key, value])** => like map but returns an object, the callback function must return a two element array [key, value]

**Array.MapToMap((value, index) => return [key, value])** => like map but returns an Map, the callback function must return a two element array [key, value]

**Array.MapToMap((value, index) => return [key, value])** => like map but returns a Set

**Array.MapToUnique((value, index) => return [key, value])** => like map but returns an Array of only unique elements

**Array.squish()** => removes the first and last elements of the array and return them in an array

**Array.shuff()** => return shuffled version of array

**Array.toStrings()** => return array with all elements casted as strings

**Array.toNums()** => return array with all elements casted as Numbers

**Array.toBools()** => return array with all elements casted as Booleans

**Array.iPop()** => immutable pop, return new version of array with last value popped

**Array.iPush(value)** => immutable push, return new version of array with value pushed into end of array

**Array.iShift()** => immutable shift, return new version of array with first value removed

**Array.iUnshift(value)** => immutable unshift, return new version of array with value added at beginning of array

**Array.iSplice(index, amount)** => immutable splice, return new version of array with the specified number of elements removed starting with the specified index.

### Utility Functions

---

**util.randomIndex(Array) =>** Return random number 0 - Array.length

**util.randomRange (Low, High) =>** Return number between low and high

**util.randomNumber(Number) =>** Return random number 0 - Number

**util.eliminateDupes(Array) =>** Return Array with duplicates removed

---

### Fetcher

---

The Fetcher class can help you encapsulate your API endpoints

```
const get = new Fetcher('http://www.xyz/get/')
const post = new Fetcher('http://www.xyz/post/')
const delete = new Fetcher('http://www.xyz/delete/')
const update = new Fetcher('http://www.xyz/update/')
```

**call(callback,config,extUrl)**

this function will call the url passed and run the callback function when the promise resolves and has been converted into JSON. You can pass in a config object include things like, headers, body, and specify type of call (defaults to get). The extUrl parameter will be appended to the url which allows you to get more mileage out of a single instance of fetcher. The resulting data from the most recent call is saved in case you need to access it again.

```
get.call((json) => console.log(json))

post.call((json) => console.log(json), {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    }, "?user=SteveJones")

```

**recall()**
returns the data from the most recent call

---

### PowerSet

---

combines the benefits of arrays and sets but giving you access to a dataset in both forms. The constructor takes an array to generate the PowerSet from. I implemented the methods from the MDN examples for sets, cause well... they are useful.

```
const { PowerSet } = utils();

const pset1 = new PowerSet([1, 2, 3, 4]);
const pset2 = new PowerSet([3, 4, 5, 6]);

console.log(pset1.difference(pset2));
```

#### PowerSet Properties

**this.set =>** the set of the array passed in

**this.arr =>** this is the array of the array passed in without duplicates

#### PowerSet methods

**this.arrMethod("Method", "Argument") =>** use any array method by passing in a string for the method you desire to use and another string with the argument you want to pass.

**this.isSuperset(PowerSet) =>** Returns true if the PowerSet is a superset of the PowerSet passed as an argument

**this.union(PowerSet) =>** Returns a powerset that is a combonation of this PowerSet and the PowerSet passed in as an argument.

**this.intersection(PowerSet) =>** returns PowerSet of elements in common between two PowerSets

**this.symmetricDifference(PowerSet) =>** returns PowerSet of elements not shared by both PowerSets

**this.difference(PowerSet) =>** returns PowerSet of elements not shared by this array with the passed in array
