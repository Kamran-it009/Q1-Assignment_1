/* Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
writing code that will print a greeting to each user */

let usernames = ['khizar', 'kamran', 'hammad', 'admin', 'umer'];

// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for(let i  = 0; i <= 4; i++)
{
    if(usernames[i] == 'admin')
    {
        console.log('\nHello admin, would you like to see a status report?\n');
        i++;
    }
    
    console.log('Hello ' + usernames[i]+', thank you for logging in again.');
}