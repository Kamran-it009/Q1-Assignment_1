/** Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name */


const magician3 = ['Babri', 'Dabora', 'Friza', 'Pikolo'];

const magician_copy = ['Babri', 'Dabora', 'Friza', 'Pikolo']; 

function show_magicians3(magician_name:string[])
{
    for (let a = 0; a <= 3; a++)
    {
        console.log(magician_name[a]);
    }
    
}

function make_great2(magician_name:string[])
{
    for (let a = 0; a <= 3; a++)
    {
        magician_name[a] = 'The Great ' +magician_name[a] ;
    }
    
}
make_great2(magician_copy);
show_magicians3(magician3);
console.log('\n');
show_magicians3(magician_copy);