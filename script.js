/* In this exercise we're going to write our first functions. Introduction

We're going to write a function that makes pizza (sadly, we're not going to actually make pizza).

1.create a new JavaScript file
2.first just check if you can run it with node
3.to take a step in the pizza-making process print the step to the console
4.think of a good clear name for your function first
5.think of at least three steps you need in your function
6.write the function
7.run the code, are you getting the result you expect? Why (not)?
8.now add code to call your function
9.now call your function three times
10.Now we have a single function, but let's make another function! We also want to make sushi.

continue in the same JavaScript file
11.add a function that makes sushi, use a good name
12.call this function, check that it works
So now, let's for a minute pretend that we work in a restaurant and we get an order for three meals of sushi and two pizzas.

change your code so that the output of your program is the steps for making sushi, three times and pizza two times
 */
// the function does nothing because there is nothing to defining
const makePizza = function () {
    console.log("make dough");
    console.log("make pizza");
    console.log("put in oven");

};

const makeSushi = function () {
    console.log("cut fish");
    console.log("role it up")
    console.log("cut into pieces")

};
// now use/calling.. the function
// The order
makeSushi();
makeSushi();
makeSushi();
makePizza();
makePizza();








