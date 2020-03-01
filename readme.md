# Alex Merced's Utilities

---

## AlexMercedCoder.com

This library contain some utility functions.

---

### utility.js

#### const util = require('./utility')

---

**util.randomIndex(Array) =>** Return random number 0 - Array.length

**util.randomRange (Low, High) =>** Return number between low and high

**util.randomNumber(Number) =>** Return random number 0 - Number

**util.eliminateDupes(Array) =>** Return Array with duplicates removed

---

### superarray.js

#### const {superArray} = require('./superarray')

---

**superArray() =>** run this function and going forward all the below methods will be available to all your arrays

---

**Array.random() =>** return random element from array

**Array.remove((value, index) =>** return boolean) => the opposite of filter, remove elements where the callback function returns true, returns a superArray

**Array.undupe() =>** returns a superArray of the array with duplicates removed

**Array.randElim() =>** eliminates a random element and returns it

**Array.leaveOne()** => Randomly eliminates all but one element from array and returns a superArray of removed elements

**Array.leaveSome(number)** => Randomly eliminates all but a defined number of elements from array and returns a superArray of removed elements
