//  Make a list of five or more usernames called current_users

const current_users = ['khizar', 'kamran', 'hammad', 'admin', 'umer'];
/*Make another list of five usernames called new_users. Make sure one or two of the new usernames
are also in the current_users list*/

const new_users = ['abdullah', 'KAMRAN', 'hammad', 'admin', 'Muzammil'];

/*Loop through the new_users list to see if each new username has already been used. If it has, print a
message that the person will need to enter a new username. If a username has not been used, 
print a message saying that the username is available */

// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
for (let x = 0; x <= 4; x++)
{
    
    if (current_users.includes(new_users[x]))
    {
        console.log('The person will need to enter a new username.');
    }
    else
    {
        console.log('username is available');
    }
}