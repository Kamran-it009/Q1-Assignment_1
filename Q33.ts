/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal
numbers end in th, except 1, 2, and 3 */ 

// Store the numbers 1 through 9 in a array

const ordinal_number = [1,2,3,4,5,6,7,8,9];

// Loop through the array

for (let n = 0; n <= 8; n++)
{
    if (ordinal_number[n] == 1)
    {
        console.log(ordinal_number[n]+'st');
    }
    else if (ordinal_number[n] == 2)
    {
        console.log(ordinal_number[n]+'nd');
    }
    else if (ordinal_number[n] == 3)
    {
        console.log(ordinal_number[n]+'rd');
    }
    else
    {
        console.log(ordinal_number[n]+'th');
    }
 
}