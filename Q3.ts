/** Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase */

let Name: string = 'kamran';
console.log('Uppercase:', Name.toUpperCase() );
console.log('Lowercase:', Name.toLowerCase() );
let ch = Name.slice(0,1);
console.log('TitleCase:', ch.toUpperCase() + Name.slice(1));