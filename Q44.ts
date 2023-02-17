/** Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as manyitems as the 
function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time */

const sanwitch = ['beef', 'swiss cheese', 'olives', 'hot sauce'];

function make_sandwitch(flavours: string[])
{
    console.log('This sandwitch is made up of ' +flavours[0]+ '. It has also '+flavours[1]+ '. It is filled with '+flavours[2]+ ' and ' +flavours[3]);

}

make_sandwitch(sanwitch);
make_sandwitch(['chicken', 'provolne cheese', 'bell pepper', 'ketchup']);
make_sandwitch(['ham', 'mozzarella cheese', 'avocado', 'mustard']);