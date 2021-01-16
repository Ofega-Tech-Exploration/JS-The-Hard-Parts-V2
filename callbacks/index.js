/* 
  Challenge 1: Create a function addTwo that accepts one input and adds 2 to it.
  Test Case: console.log(addTwo(3));
*/
function addTwo(num) {
	return num + 2;
}


/* 
  Challenge 2: Create a function addS that accepts one input and adds an "s" to it.
  Test Case: console.log(addS('pizza'));
*/
function addS(word) {
	return word + 's';
}


/* 
  Challenge 3: 
    Create a function called map that takes two inputs:
      1. an array of numbers (a list of numbers)
      2. a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')

    Have map return a new array filled with numbers that are the result of using 
    the 'callback' function on each element of the input array.

  Example => 
    map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
      multiplyByTwo(1); //-> 2
      multiplyByTwo(2); //-> 4
  
  Test Case: console.log(map([1, 2, 3], addTwo));
*/
function map(array, callback) {
	const output = [];
  
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]))
  }
  
  return output;
}


/* 
  Challenge 4: The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

  Example/Test Case => 
    let alphabet = '';
    const letters = ['a', 'b', 'c', 'd'];

    forEach(letters, function(char) {
      alphabet += char;
    });

    console.log(alphabet);   //prints 'abcd'
*/
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}


/* 
  Challenge 5: In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.

  Test Case: console.log(mapWith([1, 2, 3], addTwo));
*/
function mapWith(array, callback) {
	const output = [];
  
  forEach(array, item => {
    output.push(callback(item))
  });
  
  return output;
}


/* 
  Challenge 6: 
    The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

    Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.

  Example/Test Case => 
    const nums = [4, 1, 3];
    const add = function(a, b) { return a + b; }
    console.log(reduce(nums, add, 0));   //-> 8
*/
function reduce(array, callback, initialValue) {
	let accumulator = initialValue;
  
  forEach(array, item => {
    accumulator = callback(accumulator, item)
  });
  
  return accumulator;
}


/* 
  Challenge 7: Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

  Test Case: console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])) => [5, 15]
*/
function intersection(...arrays) {
  const [baseArr, ...newArrList] = arrays;

	return reduce(newArrList, (acc, arrItem) => {
    return acc.filter(val => arrItem.includes(val))
  }, baseArr);
}


/* 
  Challenge 8: Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!

  Test Case: console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])) => [5, 10, 15, 88, 1, 7, 100]
*/
function union(...arrays) {
  const [baseArr, ...newArrList] = arrays;

	return reduce(newArrList, (acc, arrItem) => {
    forEach(arrItem, val => {
      if(!acc.includes(val)) {
        acc.push(val)
      }
    })
    
    return acc;
  }, baseArr);
}


/* 
  Challenge 9: Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

  Test Case: 
    console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { 
      return str.toUpperCase(); 
    })) => { hi: 'HI', bye: 'BYE', later: 'LATER' }
*/
function objOfMatches(array1, array2, callback) {
  return reduce(array1, (acc, val) => {
    const index = array1.indexOf(val);
    
    if (callback(val) === array2[index]) {
      acc[val] = array2[index];
    }
    
    return acc;
  }, {});
}


/* 
  Challenge 10: Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

  Test Case: 
    console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { 
      return str + str; 
    }])); => { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
*/
function multiMap(arrVals, arrCallbacks) {
  return reduce(arrVals, (acc, val) => { 
    acc[val] = [];

    forEach(arrCallbacks, cb => {
      acc[val].push(cb(val))
    })
    
    return acc;
  }, {});
}


/* 
  Challenge 11: Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.

  Test Case: 
    const cities = {
      London: 'LONDON',
      LA: 'Los Angeles',
      Paris: 'PARIS',
    };

    console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
*/
function objectFilter(obj, callback) {
  const res = {};
  
  for(const key in obj) {
    if(obj[key] === callback(key)) {
      res[key] = obj[key]
    }
  }
  
  return res;
}


/* 
  Challenge 12: Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

  Test Case: 
    const isOdd = function(num) { 
      return num % 2 === 1; 
    };

    console.log(majority([1, 2, 3, 4, 5], isOdd)) => true
    console.log(majority([2, 3, 4, 5], isOdd)) => false
*/
function majority(array, callback) {
  let count = 0;

  forEach(array, item => {
    if(callback(item)) count++;
  })

  return count > (array.length / 2) ? true : false
}


/* 
  Challenge 13: Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

  Test Case: 
    const startsWithS = function(str) { 
      return str[0] === 's' || str[0] === 'S'; 
    };

    console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)) => ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
*/
function prioritize(array, callback) {
  const results = {};

  results.true = [];
  results.false = [];

  forEach(array, item => {
    callback(item) ? results.true.push(item) : results.false.push(item);
  })

  return [...results.true, ...results.false]
}


/* 
  Challenge 14: Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

  Test Case: 
    console.log(countBy([1, 2, 3, 4, 5], function(num) {
      if (num % 2 === 0) return 'even';
      else return 'odd';
    })) => { odd: 3, even: 2 }
*/
function countBy(array, callback) {
  return reduce(array, (acc, item) => { 
    const result = callback(item);

    if(acc[result]) acc[result]++;
    else acc[result] = 1;
    
    return acc
  }, {});
}


/* 
  Challenge 15: Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

  Test Case: 
    const decimals = [1.3, 2.1, 2.4];
    const floored = function(num) { 
      return Math.floor(num); 
    };

    console.log(groupBy(decimals, floored)) => { 1: [1.3], 2: [2.1, 2.4] }
*/
function groupBy(array, callback) {
  return reduce(array, (acc, item) => { 
    const key = callback(item);

    if(acc[key] && key === callback(item)) acc[key].push(item);
    else acc[key] = [item];
    
    return acc
  }, {});
}


/* 
  Challenge 16: Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

  Test Case: 
    const sunny = { 
      mac: 'priest', 
      dennis: 'calculating', 
      charlie: 'birdlaw', 
      dee: 'bird', 
      frank: 'warthog' 
    };

    const startsWithBird = function(str) { 
      return str.slice(0, 4).toLowerCase() === 'bird'; 
    };

    console.log(goodKeys(sunny, startsWithBird)) => ['charlie', 'dee']
*/
function goodKeys(obj, callback) {
  const res = [];

  for(const key in obj) {
    if(callback(obj[key])) {
      res.push(key);
    }
  }

  return res;
}


/* 
  Challenge 17: Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).

  Test Case: 
    const multBy3 = n => n * 3;
    const divBy4 = n => n / 4;
    const subtract5 = n => n - 5;

    console.log(commutative(multBy3, divBy4, 11)) => true
    console.log(commutative(multBy3, subtract5, 10)) => false
    console.log(commutative(divBy4, subtract5, 48)) => false
*/
function commutative(func1, func2, value) {
  const firstResult = func2(func1(value));
  const secondResult = func1(func2(value));

  return firstResult === secondResult;
}


/* 
  Challenge 18: Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.

  Test Case: 
    const startingObj = {};

    startingObj[6] = 3;
    startingObj[2] = 1;
    startingObj[12] = 4;

    const half = n => n / 2;
    console.log(objFilter(startingObj, half)) => should log: { 2: 1, 6: 3 }
*/
function objFilter(obj, callback) {
  return objectFilter(obj, callback);
}


/* 
  Challenge 19: Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.

  Test Case: 
    const isEven = n => n % 2 === 0;
    const greaterThanFour = n => n > 4;
    const isSquare = n => Math.sqrt(n) % 1 === 0;
    const hasSix = n => n.toString().includes('6');

    const checks = [isEven, greaterThanFour, isSquare, hasSix];

    console.log(rating(checks, 64)); // should log: 100
    console.log(rating(checks, 66)); // should log: 75
*/
function rating(arrOfFuncs, value) {
  const count = reduce(arrOfFuncs, (acc, cb) => {  
    if(cb(value)) acc++;
    return acc;
  }, 0);
  
  return (count / arrOfFuncs.length) * 100
}


/* 
  Challenge 20: Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.

  Test Case: 
    const capitalize = str => str.toUpperCase();
    const addLowerCase = str => str + str.toLowerCase();
    const repeat = str => str + str;

    const capAddlowRepeat = [capitalize, addLowerCase, repeat];

    console.log(pipe(capAddlowRepeat, 'cat')) => 'CATcatCATcat'
*/
function pipe(arrOfFuncs, value) {
  return reduce(arrOfFuncs, (acc, cb) => cb(acc), value)
}


/* 
  Challenge 21: Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.

  Test Case: 
    const groupOfFuncs = {};

    groupOfFuncs.double = n => n * 2;
    groupOfFuncs.addTen = n => n + 10;
    groupOfFuncs.inverse = n => n * -1;

    console.log(highestFunc(groupOfFuncs, 5)) => 'addTen'
    console.log(highestFunc(groupOfFuncs, 11)) => 'double'
    console.log(highestFunc(groupOfFuncs, -20)) => 'inverse'
*/
function highestFunc(objOfFuncs, subject) {
  let [currentMaxKey, currentResult] = ["", 0];

  for (const key in objOfFuncs) {
    const objValue = objOfFuncs[key](subject);

    if(objValue > currentResult) {
      [currentMaxKey, currentResult] = [key, objValue];
    }
  }

  return currentMaxKey;
}


/* 
  Challenge 22: Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. combineOperations should pass the starting value into the first function in the array. combineOperations should pass the value returned by the first function into the second function, and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.

  Test Case: console.log(combineOperations(0, [add100, divByFive, multiplyByThree])) => 60
*/
function combineOperations(startVal, arrOfFuncs) {
  return pipe(arrOfFuncs, startVal)
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}


/* 
  Challenge 23: Define a function myFunc that takes an array and a callback. myFunc should pass each element from the array (in order) into the callback. If the callback returns true, myFunc should return the index of the current element. If the callback never returns true, myFunc should return -1.

  Test Case: 
    console.log(myFunc(numbers, isOdd)) => 1
    console.log(myFunc(evens, isOdd)) => -1
*/
function myFunc(array, callback) {
  return reduce(array, (acc, num) => {  
    if(callback(num)) {
      acc = array.indexOf(num)
    }

    return acc;
  }, -1);
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}


/* 
  Challenge 24: Write a function myForEach that accepts an array and a callback function. Your function should pass each element of the array (in order) into the callback function. The behavior of this function should mirror the functionality of the native .forEach() JavaScript array method as closely as possible.

  Test Case: 
    const nums = [1, 2, 3];

    myForEach(nums, addToSum);
    console.log(sum) => 6
*/
function myForEach(array, callback) {

}

let sum = 0;

function addToSum(num) {
  sum += num;
}