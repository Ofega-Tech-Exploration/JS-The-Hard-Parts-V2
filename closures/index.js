/* 
  Challenge 1: Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

  Test Case: 
    const function1 = createFunction();
    function1() => should console.log('hello');
*/
function createFunction() {
  return () => {
    console.log('hello');
  };
}


/* 
  Challenge 2: Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

  Test Case: 
    const printSample = createFunctionPrinter('sample');
    printSample() => should console.log('sample');

    const printHello = createFunctionPrinter('hello');
    printHello() => should console.log('hello');
*/
function createFunctionPrinter(input) {
  return () => {
    console.log(input);
  }
}


/* 
  Challenge 3A: Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.

  Test Case: 
    willCounter() => 'counter' 1
    willCounter() => 'counter' 2
    willCounter() => 'counter' 3

    jasCounter()  => 'counter' 1

    willCounter() => 'counter' 4
*/
function outer() {
  let counter = 0;

  return () => {
    counter++;
    console.log('counter', counter);
  }
}


/* 
  Challenge 3B: Create a function addByX that returns a function that will add an input by x.

  Test Case: 
    const addByTwo = addByX(2);
    addByTwo(1) => should return 3
    addByTwo(2) => should return 4
    addByTwo(3) => should return 5

    const addByThree = addByX(3);
    addByThree(1) => should return 4
    addByThree(2) => should return 5

    const addByFour = addByX(4);
    addByFour(4) => should return 8
    addByFour(5) => should return 9
*/
function addByX(x) {
  return input => input + x;
}


/* 
  Challenge 4: Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

  Test Case: 
    const onceFunc = once(addByTwo);
    console.log(onceFunc(4)) => should log 6
    console.log(onceFunc(10)) => should log 6
    console.log(onceFunc(9001)) => should log 6
*/
function once(func) {
  let result = null;

  return x => {
    if(!result) result = func(x);
    return result;
  }
}


/* 
  Challenge 5: Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

  Test Case: 
    const called = function() { 
      console.log('hello') 
    };

    const afterCalled = after(3, called);
    afterCalled() => nothing is printed
    afterCalled() => nothing is printed
    afterCalled() => 'hello' is printed
*/
function after(count, func) {
  let tracker = 1;

  return () => {
    if(tracker === count) return func();
    tracker++;
  }
}


/* 
  Challenge 6: Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

  Test Case: 
    const called = function() { 
      console.log('hello') 
    };

    const afterCalled = after(3, called);
    afterCalled() => nothing is printed
    afterCalled() => nothing is printed
    afterCalled() => 'hello' is printed
*/
function after(count, func) {
  let tracker = 1;

  return () => {
    if(tracker === count) return func();
    tracker++;
  }
}