/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array */ 

// Make a array of your three favorite fruits and call it favorite_fruits
let favorite_fruits = ['Apple', 'Orange', 'Cherry', 'Grapes'];

/* Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is
in your array, the if block should print a statement such as You really like bananas!*/
// console.log("Apple" == favorite_fruits); 
let fruit = 'Apricot'
if (favorite_fruits.includes(fruit))
{
    console.log('You really like ' + fruit );
}
fruit = 'Orange'
if (favorite_fruits.includes(fruit))
{
    console.log('You really like ' + fruit );
}
fruit = 'Pear'
if (favorite_fruits.includes(fruit))
{
    console.log('You really like ' + fruit );
}
fruit = 'Stawberry'
if (favorite_fruits.includes(fruit))
{
    console.log('You really like ' + fruit );
}
fruit = 'Grapes'
if (favorite_fruits.includes(fruit))
{
    console.log('You really like ' + fruit );
}