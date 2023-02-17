// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty
const usernames2 = ['khizar', 'kamran', 'hammad', 'admin', 'umer'];
// Remove all of the usernames from your array, and make sure the correct message is printed
usernames2.splice(0,usernames2.length);
//  If the list is empty, print the message We need to find some users!
 if(usernames2.length == 0)
 {
    console.log('We need to find some users!');
 }

