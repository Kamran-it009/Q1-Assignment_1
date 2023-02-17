/**Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message */

function make_shirt2(size = 'large', message = 'I love TypeScript.')
{
    console.log('Size:',size,'\n',message);
}
function make_shirt3(size = 'medium', message = 'I love TypeScript.')
{
    console.log('Size:',size,'\n',message);
}

function make_shirt4(size = 'small', message = 'Good looking..')
{
    console.log('Size:',size,'\n',message);
}

make_shirt2();
make_shirt3();
make_shirt4();