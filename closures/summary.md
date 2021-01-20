# Closures Review
I want to start by saying that the closures concept is one that I have revisited many times throughout my learning journey. All of those times, I have read definitions and looked at examples, but I could never really understand what the heck was going on. I am happy to say that Will's section on closures is my last bus-stop in my struggle to understand the concept. 

One thing that continuously plagued my mind whilst attempting the closure exercises is how I have worked on challenges without understanding this concept for so long? Take a look at the `once` example:

```
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
```
Without understanding closures, it's impossible to think that the returned function can somehow track that it has already been called once by itself. I wish now that I had solved this example before I learned about closure to see how I would have tackled it.    
&nbsp;

## A Quick Recap
The first thing to note is that JavaScript's scope rule is Lexical/Static scoping; This means that where the function is defined determines what data is available to it when the code runs. 

To put it simply, we can say that closures are possible because functions have a hidden property that houses all the data from the local memory where we defined that function. 

Closures can refer to two things; the first is the hidden values themselves (the function's data backpack). The second is the "concept" of a function closing in on the data in its immediate environment.      
&nbsp;

## Extra Curricular
When I solved `Challenge 9` of the closure exercise, I decided to send the challenge to a friend to see how he would solve it. The question for the challenge is as follows:

```
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
```

**Solution A**: This is my solution (Super Cringe):
```
function cycleIterator(array) {
  let current = 1;

  return () => {
    const value = current % array.length;
    current++;

    if(value === 0) return array[array.length - 1];
    else return array[value - 1];
  }
}
```

**Solution B**: This is his solution (So Jealous):
```
function cycleIterator(array) {
  let index = -1;
  return function next() {
    index = (index + 1) % array.length;
    return array[index];
  }
}
```

When I looked at these two solutions side by side, I could immediately tell that his version was better. I sent the two solutions along with the question to a senior engineer friend of mine just so that I could figure out in clear terms what the difference was. 

The **first** thing he pointed out was that solution B was simple, expressive and had a consistent code style, whilst solution A was too verbose, with multiple code styles. The point about consistency confused me, so I asked him to explain further. He pointed out that solution A used the function keyword for the outer function and then used an arrow function for the return. 

That got me thinking. Is that a thing? Do people really look at code and notice that the styles are not consistent? My first point of action was to internally tell myself that I was given the outer function and typically would have used an arrow function. But when I thought about it some more, I agreed that consistency was not a thing I would have thought about before now. If I had used an arrow function, it would have been because I liked using arrow functions and not because I wanted to have a consistent code style. There was also something about limiting the usage of arrow functions, but that's for another time.

The **second** thing he pointed out was that solution B was doing a lot to handle the edge cases, signifying that the solution was not well thought out. As hard as it was to hear this, I absolutely agreed with him because it was true. I'll illustrate by showing my initial code:

```
function cycleIterator(array) {
  let current = 1;

  return () => {
    const value = array[(current % array.length) - 1];
    current++;

    return value
  }
}
```

My thought process on seeing the challenge was to use the modulo operator to create an automatic looping mechanism. I am not sure why I initialized at one, but I thought that I could always use a -1 to get the index down to the correct number. Whilst this worked, I kept getting these results:

```
'Fri'
'Sat'
undefined
```

I found out that when `current` was equal to `array.length`, the modulo operator returned 0, which would mean that I was trying to do `array[-1]`. This was not the behaviour I planned for. What did I do then to fix this? I handled the edge case just like my friend said. I slapped in an if statement to give a different output if the value was ever 0, and then moved on with my life.

How do I feel about it now? I am slightly annoyed with myself because I would like to think that I am a very detail-oriented problem solver who outputs well-thought-out code. This example clearly showed me that I do not do that. I try to "patch" up errors instead of going back to figure out a better way of implementing things.

I think the solution to this is to practice being conscious about the decisions I take regarding solving problems. The goal is to do this till it becomes a habit.      
&nbsp;

**AN ASSUMPTION I HAVE**: I have somehow put it into my head that I cannot initialize with anything other than a `0` when I need to create a counter variable. It's so ingrained that initializing with `1` makes me feel guilty. I think it's the fear of something going wrong because the count is off. When I saw that my friend had set index to `-1`, I felt very weird about it. 