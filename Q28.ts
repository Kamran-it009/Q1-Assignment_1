/* Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the
variable age, and then:*/

let age = 26;

if (age < 2)
{
    console.log('\nPerson is a baby');
}
else if (age >= 4 && age < 13)
{
    console.log('\nPerson is a kid');
}
else if (age >= 13 && age < 20)
{
    console.log('\nPerson is a teenager');
}
else if (age >= 20 && age < 65)
{
    console.log('\nPerson is a adult');
}
else
{
    console.log('\nPerson is a elder');
}