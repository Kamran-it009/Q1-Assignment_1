/** Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified */

const magician2 = ['Babri', 'Dabora', 'Friza', 'Pikolo'];

function show_magicians2(magician_name:string[])
{
    for (let a = 0; a <= 3; a++)
    {
        console.log(magician_name[a]);
    }
    
}

function make_great(magician_name:string[])
{
    for (let a = 0; a <= 3; a++)
    {
        magician_name[a] = 'The Great ' +magician_name[a] ;
    }
    
}
make_great(magician2);
show_magicians2(magician2);