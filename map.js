  
/**
 * To run this file in Gitpod, use the 
 * command "node map.js" in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let result = [];
for (let num of nums) {
  result.push(num * 2);
}
console.log(result);


// Using map(): more verbose i.e lengthy & overcomplicated approach
/* A function that takes in a number & returns that same number multiplied by 2 */
const multByTwo = function (num) {    // line 1
  return num * 2; // line 2
}

/* We pass the multByTwo function to the map() method & this function will be 
called on every element of the nums array */
const mapResults = nums.map(multByTwo); // line 3. The Calling function. Store the result by setting this call to the map method equal to a variable 'mapResults'
console.log(mapResults); // line 4


// Simplified w/ map()
/* The 4 lines of code above has been compressed into 1 single line here using substitution method. 
The function name 'multByTwo' in the 3rd line of code above has been replaced by 'function(num)' in line 1 above. */
const simplified = nums.map(function(num) {return num * 2});
console.log(simplified);

// Simplfied w/ map() + arrow function
/* Since it only takes 1 parameter 'num', it doesn't need parenthesis around the 1st num nor return stmt or curly braces.
All of that has been taken care of by the handy fat arrow " => " used. */
const arrow = nums.map(num => num * 2); 
console.log("With Arrow Function, Result is: ", arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

/* It returns an array of arrays (i.e nested array) that contains each student's name and id from the original 'students' object */
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);


//const studentsWithIds = students.map(student) => ({student.name, id});
//const arrow = nums.map(num => num * 2); 
//console.log(simplified);

/*

var data= [
  ['val1', 'val2'],
  ['val1', 'val2'],
  ['val1', 'val2'],
  ['valN', 'valN'],
];

var result = data.map(function(row) {
return {
  lat: row[0],
  lng: row[1]
};
});

console.log(result);
*/


