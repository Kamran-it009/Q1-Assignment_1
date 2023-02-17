/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
try more comparisons, write more tests. Have at least one True and one False result for each of the
following*/

// Tests for equality and inequality with strings
console.log('ravi' == 'ravi');
console.log('ravi' !== 'ravi');

//Tests using the lower case function
console.log('\n');
console.log('car' == 'car');
console.log('BIKE'== 'bike');

/*Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to*/
console.log('\n');
console.log(2 == 2);
console.log(2 !== 2);
console.log(1 < 2);
console.log(2 > 3);
console.log(1 <= 2);
console.log(2 >= 3);

// Tests using "and" and "or" operators
console.log('\n');
console.log(2 > 1 && 6 > 3);
console.log(2 > 1 && 6 < 3);
console.log(2 > 1 || 6 < 3);
console.log(2 < 1 || 6 < 3);

//Test whether an item is in a array
console.log('\n');
const array = [1,2,3,4,5];
console.log(array.includes(2));

//Test whether an item is not in a array
console.log('\n');
console.log(array.includes(7));