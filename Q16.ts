// /*Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table*/

let guest_list3 = ['Ekram Ali', 'Abdullah Javed', 'Abdurehman'];
console.log('\nI have a found a bigger dinner table');

// //Add one new guest to the beginning of your array
guest_list3.unshift('Hammad');

// // Add one new guest to the middle of your array
let x = guest_list3.length/2
guest_list3.splice(x, 0, 'Khizar');


// //Use append() to add one new guest to the end of your list.

guest_list3.push('Usama');

// //Print a new set of invitation messages, one for each person in your list.

console.log('\nDear '+guest_list3[0]+', I would like to invite you on dinner tonight at 8:00 pm.');



console.log('Dear '+guest_list3[1]+', I would like to invite you on dinner tonight at 8:00 pm.');
console.log('Dear '+guest_list3[2]+', I would like to invite you on dinner tonight at 8:00 pm.');
console.log('Dear '+guest_list3[3]+', I would like to invite you on dinner tonight at 8:00 pm.');
console.log('Dear '+guest_list3[4]+', I would like to invite you on dinner tonight at 8:00 pm.');
console.log('Dear '+guest_list3[5]+', I would like to invite you on dinner tonight at 8:00 pm.');
