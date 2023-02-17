let guest_list4 = [
    'Hammad',
    'Ekram Ali',
    'Khizar',
    'Abdullah Javed',
    'Abdurehman',
    'Usama'
  ];
/*Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner*/

console.log('Sorry, I have a table for only two person\'s dinner.\n');

/*Remove guests from your list one at a time until only two names remain in your list. Each time you pop
a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner*/

console.log(guest_list4.pop()+' sorry I can’t invite you to dinner');
console.log(guest_list4.pop()+' sorry I can’t invite you to dinner');
console.log(guest_list4.pop()+' sorry I can’t invite you to dinner');
console.log(guest_list4.pop()+' sorry I can’t invite you to dinner');

//Print a message to each of the two people still on your list, letting them know they’re still invited

console.log('\nYou are still invited '+guest_list4.pop());
console.log('You are still invited '+guest_list4.pop());

/*Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end*/

console.log(guest_list4);