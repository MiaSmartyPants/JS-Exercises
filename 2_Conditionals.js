
function exercise1(num1) {
  let answer1 = "num1 is small";
  // ------------------------------------------
  // Write your code for exercise 1 below here:
  // ------------------------------------------
if (num1 > 10){
  answer1 = ' The value of num1 is' + num1 + ' and is greater than 10';
}
  // ------------------------------------------
  // And above here
  // ------------------------------------------
  return answer1;
}

// EXERCISE 2.
// Write an if/else conditional statement that if given a number will assign
// a string value of:
// "<num2 value> is even" to `answer2`,
// if `num2` is even
// and a value of "<num2 value> is odd" to `answer2`,
// if `num2` is odd.
// ie. if num2 has a value of 4 then the message should read:
// "4 is even"

function exercise2(num2) {
  let answer2;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (num2%2 == 0){
  answer2 = num2 + ' is even';
  }
  if (num2%2 > 0){
    answer2 = num2 + ' is odd';
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
 
  return answer2;
}
console.log(exercise2(9));

// EXERCISE 3.
// Write an if/else if/else block such that if `num3` is positive, then
// answer3 is assigned the string value of:
// "<num3 value> is positive"
// if `num3` is negative, then the value should be:
// "<num3 value> is negative"
// otherwise if the value is zero it should return
// "<num3 value> is zero"

function exercise3(num3) {
  let answer3;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
if (num3 > 0){
  answer3 = num3 + ' is positive';
}
  else if (num3<0) {
    answer3 = num3 + " is negative";
  }
// 
// otherwise if the value is zero it should
  else if (num3 ==0){ 
    answer3 = num3 + " is zero";
      }// --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer3;
}

// EXERCISE 4.
// Write an if/else statement such that if `varA` and `varB` are strings or
// numbers and they have equal values, then change the value of answer4 to
// "varA and varB are equal"
// otherwise assign a value of

function exercise4(varA, varB) {
  let answer4;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
if ((typeof varA == 'string' && typeof varB == 'string')||(typeof varA =='number' && typeof varB == 'number') ){
   if (varA === varB){
     answer4 = varA + ' and ' + varB + ' are equal'
   }
}
  else {
    answer4 = "varA and varB differ";
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
 
  return answer4;
}
console.log(exercise4(15,15))
console.log(exercise4(15,'15'))
// EXERCISE 5.
// In exercise 4, what are some of the unexpected cases where `varA` and `varB`
// seemed like they are equal, but would not pass the tests? In your analysis
// consider other data types beside strings and variables.
console.log(exercise4(3, '3'))
console.log(exercise4(undefined, null))
// EXERCISE 6.
// Here, assign the value of true to answer6 if:
// `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
// in the event this is not the case, change the value of answer6 to false
function exercise6(varA, varB, varC) {
  let answer6 = "unassigned";
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
if(varA === varB && varA + varB != varC){
  answer6 = true;
}else{
  answer6 = false;
}
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer6;
}

// EXERCISE 7.
// Use a switch conditional statement with case clauses such that if `num7` is
// a number and it has a value of 1 that `answer7` is assigned the string:
// "You won!"
// if num7 is 7, then answer7 should be:
// "You are lucky!"
// if num7 is 101, then answer7 should be:
// "Welcome to coding 101!"
// if num7 is 1000000, then answer7 should be:
// "You are one in a million!"
// Othewise, assign answer7 a value of:
// "Thanks for that!"

function exercise7(num7) {
  let answer7;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
switch (num7){
  
  case 1:
answer7 = 'You won!';
  break;

    case 7:
answer7 = 'You are lucky!';
  break;

    case 101:
answer7 = 'Welcome to coding 101!';
  break;

    case 1000000:
answer7 = 'You are one in a million!';
  break;

  default:
    answer7 = 'Thanks for that!';
    break;
    
}
  
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer7;
}

// EXERCISE 8.
// Using any conditional assign the value of true to answer8 if:
// the values of amount1 and amount2 are between the values of
// minimum and maximum
// if not, assign a value of false to answer8
function exercise8(amount1, amount2, minimum, maximum) {
  let answer8;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
if ((minimum < amount1  && amount1 < maximum) && (minimum < amount2 && amount2 < maximum)){
  answer8 = true;
}else{
  answer8 = false;
}
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer8;
}
console.log(exercise8(6,8,4,10))
console.log(exercise8(6,84,0,10))

// EXERCISE 9.
// In this exercise, if `item` is a number, follow the rules given in Exercise 7
// except that `answer7` is replaced by `answer9`
// If `item` is not a number, then assign a value to answer9 of:
// "Please send a number, that was a <data type>."
// for example, if item===true, the value should be:
// "Please send a number, that was a boolean."
function exercise9(item) {
  let answer9;
   
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
switch (item){
  
  case 1:
answer9 = 'You won!';
  break;

  case 7:
    answer9= 'You are lucky!';
  break;

    case 101:
answer9 = 'Welcome to coding 101!';
  break;

    case 1000000:
answer9 = 'You are one in a million!';
  break;

  default:
   let dataType = typeof item;
    answer9 = "Please send a number, that was a " + dataType;
    break;
    
}
  
  // --------------------------------------------
  // And above here
  // --------------------------------------------

  return answer9;
}

// EXERCISE 10.
// This question is a modified version of a classic programming question
// called "Fizz Buzz"
// Using a conditional, assign a value of:
// "Fizz" to `answer10` if the value of `num10` is divisible by 3
// "Buzz" to `answer10` if the value of `num10` is divisible by 5
// "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
// and if none of these conditions are satisfied, then assign the value of
// `num10` to `answer10`

function exercise10(num10) {
  let answer10;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
 if (num10%15 == 0){
    answer10 = 'FizzBuzz';
  }
  else if (num10 % 5==0){
    answer10 = 'Buzz';
    
  }else if (num10%3 == 0){
  answer10 = 'Fizz';
} else {
    answer10 = num10;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer10;
}

// Congrats, you made it to the end! You rock!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//medium easy


