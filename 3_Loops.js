let n = 1;
while (n <6){
  console.log(n);
  n++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let number =1;
do {
  console.log(number);
  number++;
}while(number <=5)


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for(let i = 1; i<= 5; i++){
  console.log (i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let i = 10;
while (i>0){
  console.log(i);
  i--;
}
for(let i = 10;i>0; i--){
  console.log(i);
}
i = 10;
do {
  console.log(i);
  i--;
}while(i>0)
// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
i = 7;
while (i<28){
  console.log(i);
  i++;
}
for(let i = 7;i< 28; i++){
  console.log(i);
}
i = 7;
do {
  console.log(i);
  i++;
}while(i<28)

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
i = 10;
while (i<91){
  console.log(i);
  i+=10;
}
for(let i = 10;i< 91; i+=10){
  console.log(i);
}
i = 10;
do {
  console.log(i);
  i+=10;
}while(i<91)
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 0;
while (counterFour > -100) { //counterFour starts as less than 2 and decrements, meaning it will alays be less than 2 which is the condition for the loop to run.
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let prize = 4;
let a = 0;
while(a <= prize){
  console.log(a);
  a++;
  
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
const favoriteNumber = 7;
for(let i = 0; i<50; i++){
if(i !== favoriteNumber){
console.log( i + ' Not my favorite number');
}
else{
console.log(favoriteNumber + ' my favorite number');
}
// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//with for loops the iteratin is already known. while loops are helpful for when the iteration amount isnt sure. do while can execute atleast once

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

// for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
//   console.log("counting down from", outsideCounter);
//   for (let insideCounter = outsideCounter;insideCounter >0; insideCounter-- ) {
//     console.log("inside" + insideCounter);
//   }
//   console.log("***********************************");
// }

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
//https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript
// Please answer in a comment below.
//medium easy

