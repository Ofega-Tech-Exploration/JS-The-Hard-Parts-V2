## Callbacks Review
Going through the course gives me a newfound appreciation for callbacks. It made me realize how important the concept is in JavaScript, and how not knowing about it can lead to a lack of understanding in some other areas. 

I realized that although I have used callbacks a lot through the years in various implementations and used the name several times whilst explaining my code, I never really recognized everything that came with understanding callbacks. 

You see, I had always seen this definition of callbacks in every resource I found, "Callbacks are functions that we pass into another function (Higher-Order Functions) as an argument". It somehow gave me the idea that the concept of callbacks stops at just being a "name" for functions passed in as arguments. 

On the one hand, it is just that. Taking higher-order functions like map(), reduce(), forEach() into consideration, we can deduce that we use callbacks to define specific tasks that we need our generalized outer functions to carry out. 

However, we use callbacks in another way. We use it to deal with asynchronicity in Javascript. What does this mean? It means that we can use callbacks to define a functionality that needs to execute later, usually after some asynchronous task resolves. Understanding asynchronous callbacks is dependent on understanding how JavaScript runs our code within its host environment. For the web, this host is the Browser.

I like to think about it like this; callbacks provide a bridge between JavaScript's execution environment and the Browser's resolved operations. For more information on how JavaScript runs, this course and [the talk](https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf) by Philip Roberts do justice.
