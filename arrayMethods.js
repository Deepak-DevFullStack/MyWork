// Splice Method
arr1 = [10,20,30,40,50];
console.log(arr1.splice(1,2,11,12));
console.log(arr1); // After splice Methods

//Slice Method return index specific elements
arr2 = [20,30,40,50,60,70],80;
console.log(arr2.slice(1,4));
console.log(arr2);

//indexof()
console.log(arr2.indexOf(40));

//concat():
let num1 = [10,20]
let num2 = [30,40]
let newarr = num1.concat(num2);
console.log(newarr);

//join():
var names = ['a','p','p','l','e']
let fruit_name = names.join("");
console.log(fruit_name);

//array unpacking:
let users = ['Deepak','Deep','Ashu','Annu']
let [user1,user2] = users;
console.log(user1)
console.log(user2)