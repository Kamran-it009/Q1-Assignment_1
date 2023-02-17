// Seeing the World: Think of at least five places in the world you’d like to visit
// Store the locations in a array. Make sure the array is not in alphabetical order
let place = ['Canada', 'Switzerland', 'Norway', 'London'];
//Print your array in its original order
console.log(place);
// //Print your array in alphabetical order without modifying the actual list
const sorted = ['Canada', 'Switzerland', 'Norway', 'London'].sort();
console.log('\nSorted:',sorted );
// // Show that your array is still in its original order by printing it
console.log('\nOriginal:', place);
//Print your array in reverse alphabetical order without changing the order of the original list
const reversed = ['Canada', 'Switzerland', 'Norway', 'London'].reverse();
console.log('\nReversed:', reversed);
// Show that your array is still in its original order by printing it
console.log('\nOriginal:',place);
//Reverse the order of your list. Print the array to show that its order has change.
console.log('\nReversed:',place.reverse());
console.log('\nOriginal_change:',place);
//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log('\nBack to Original:',place.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log('\nSorted_again:',place.sort());
console.log('\nOriginal_change:',place);