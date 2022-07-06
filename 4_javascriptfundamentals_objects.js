// Create an empty object user.
let user = {};
// Add the property name with the value John.
user.name = "John";
console.log(user);
// Add the property surname with the value Smith.
user.surname = "Smith";
console.log(user);
// Change the value of the name to Pete.
user.name = "Pete";
console.log(user)
// Remove the property name from the object.
delete user.name;
console.log(user)





// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};

function isEmpty(obj){
  return JSON.stringify(obj) === "{}";
}
console.log(isEmpty(schedule))
  
schedule["8:30"] = "get up";

console.log(isEmpty(schedule))






// We have an object storing salaries of our team:

 let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130
 }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
let sum = 0;
for(let key in salaries){
  sum+=salaries[key];
}
console.log(sum);






// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
  return obj; // this return statement is to check/console.log my answer 
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(multiplyNumeric(menu));



