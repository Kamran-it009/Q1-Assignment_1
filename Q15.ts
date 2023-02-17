/** Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list */

let guest_list2 = ['Umer Daraz', 'Abdullah Javed', 'Abdurehman'];
console.log(guest_list2[0]+ 'can\'t attend the dinner.')
guest_list2[0] = 'Ekram Ali'
console.log('\n\nDear '+guest_list2[0]+', I would like to invite you on dinner tonight at 8:00 pm.');
console.log('Dear '+guest_list2[1]+', I would like to invite you on dinner tonight at 8:00 pm.');
console.log('Dear '+guest_list2[2]+', I would like to invite you on dinner tonight at 8:00 pm.');
