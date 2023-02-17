/** Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly */

function car_function(manu_name:string, model_name:string, color_name:string, price:number)
{

    const car_object : 
    {
        manufacturer:string; 
        model:string; 
        color:string; 
        price:number
    } = {
    
        manufacturer:manu_name,
        model:model_name,
        color:color_name,
        price:price

        }
        console.log(car_object);
}

let manu_name1 = 'HONDA';
let color_name = 'black';
let model_name = '2021';
let price = 3000000;
car_function(manu_name1,model_name, color_name,price);
