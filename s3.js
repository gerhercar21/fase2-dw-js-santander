    // Ejemplo 1

// const numbers = [ 1, 3, 4, 7, 2, 1, 9, 0]

// const doubled = [];

// for (let index = 0; index < numbers.length; index ++) {
//     doubled.push(numbers[index] * 2);
// }

// console.log('Numbers', numbers);
// console.log('Doubled', numbers);


    // Ejemplo 2

// const numbers = [ 1, 3, 4, 7, 2, 1, 9, 0]
// const doubled = [];

// for (const number of numbers) {
//     doubled.push(number * 2);
// }

// console.log('Numbers', numbers);
// console.log('Doubled', numbers);


    // Reto 1 Calcular promedio de los elementos de un array

// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]

// let acumulador = 0;
// for (let index = 0; index < numbers.length; index++) {
//     acumulador = acumulador + numbers[index];
// }

// console.log(acumulador / numbers.length)


    //  OBJETOS - Definición de algo lol
// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990
// }

// console.log(john.firstName);
// console.log(john['lastName']);

//     // Cambiar propiedades
// john.firstName = 'Jane';
// john['lastName'] = 'Does';
// console.log(john.firstName)
// console.log(john['lastName']);


    // Ejemplo convirtiendo un objeto en array

// const car = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
// }

// const keys = Object.keys(car);
// const pairs = [];

// for (let i = 0; i < keys.length; i++) {
//     pairs.push( [keys[i], car[keys[i]]])
// }


// console.log(pairs);


    // Reto 2
Object.keys()