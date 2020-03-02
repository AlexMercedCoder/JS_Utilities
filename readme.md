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
    Fetcher
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
    Fetcher
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

---

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
