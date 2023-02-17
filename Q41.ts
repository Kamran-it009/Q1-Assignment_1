/** 41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array */

const magician = ['Babri', 'Dabora', 'Friza', 'Pikolo'];

function show_magicians(magician_name:string[])
{
    for (let a = 0; a <= 3; a++)
    {
        console.log(magician_name[a]);
    }
    
}

show_magicians(magician);