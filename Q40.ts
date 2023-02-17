/** Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.*/


function make_album(artist_name:string, title:string)
{
    const obj = {name:artist_name, title:title};
    return obj;
}
console.log(make_album('Tom cruss', 'Casual'));
console.log(make_album('Vin Dessel', 'Advance'));
console.log(make_album('Dekert shaw', 'Action'));

/*Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album */

function make_album2(artist_name:string, title:string, track:number)
{
    const obj = {name:artist_name, title:title, tracks:track};
    return obj;
}
console.log(make_album2('Rock', 'Enhanced', 3));