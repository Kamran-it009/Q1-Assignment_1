/* Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza*/

const pizza = ['supreme', 'fajita', 'tikka'];
for (let a = 0; a <= 2; a++)
{
    console.log(pizza[a]);
}

/* Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza */
for (let a = 0; a <= 2; a++)
{
    console.log('I like ' + pizza[a] + ' pizza.');
}


/*Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!*/

console.log('Fajita pizza is a fusion of Mexican and Italian cuisines. This pizza typically has a thin or thick crust and is topped with fajita-style seasoned grilled chicken or beef, bell peppers, onions, and melted cheese. It may also be topped with salsa, guacamole, or sour cream to add an extra burst of flavor.');
console.log('I really like to eat pizza.');