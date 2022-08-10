// programación funcional

// const numbers = [1, 2, 3, 4, 5];
// const doubles = numbers.map(function(number) {
//     return number * 2;
// })

// console.log(numbers);
// console.log(doubles);


    // Ejemplo 1 - Concepto de inmutabilidad: cómo afecta a funciones y cómo no hacerlo

// const car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
// }

//     Función que muta
// function addColor(car) {
//     car.color = 'Black'
//     return car;
// }

// function addColor(car) {
    // const newCar = Object.assign({}, car, {
    //     color: 'Black'
    // });

        // con spread operator - opción más legible
//     const newCar = {
//         ...car,
//         color: 'Black'
//     }
//     return newCar;
// }

// console.log('Antes de ejecutar la función', car)

// const sameCar = addColor(car)

// console.log('Después de ejecutar ', car)
// console.log('Después de ejecutar ', sameCar)


//  console.log('Son los mismos? ', car === sameCar)


    // Ejemplo 2 - Funciones puras. El valor que retorna es el mismo que el valor de entrada

// function add(a,b) {
//     return a + b;
// }

// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// }

// console.log(add(2, 3))
// console.log(randomNumber())


    // Ejemplo 3 - Crear una función pura

// let cart = [
//     {
//         item: 'Laptop',
//         quantity: 1
//     }
// ]

// function addItemToCart(cart, item, quantity) {
    //  Usando map
    // const newCart = cart.map(function(element) {
    //     return element;
    // })

    // Usando spread ...
//     const newCart = [...cart]

//     newCart.push( {
//         item,
//         quantity
//     })
//     return newCart;
// }

// cart = addItemToCart(cart, 'Telefono', 2)
// cart = addItemToCart(cart, 'Tablet', 4)
// cart = addItemToCart(cart, 'Desktop', 7)

// console.log(cart)



    // Funciones de primera clase = expresiones de función

// let square = function(number) {
//     return number * number;
// }

// var squareOfFour = square(4)

// console.log(squareOfFour)



    // Funciones de orden superior

// const numbers = [1, 2, 3, 4, 5, 6, 4];
// const doubles = numbers.map(function(number){
//     return number * 2;
// })

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// const sum = numbers.reduce(function(acumulador, valorActual){
//     return acumulador + valorActual;
// }) // valor opcional antes del final del paréntesis, default es 0

// console.log(numbers);
// console.log(doubles);
// console.log(sum);

// const num = 12345;

// const array = num.toString().split('');
// console.log('array', array)



    // Reto 1

