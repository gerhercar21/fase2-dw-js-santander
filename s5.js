//  Ejemplo 1

// if (true) {
//     var foo = 'John Doe'
//     console.log(foo)
// }

// console.log(foo)



//  Ejemplo 2

// var numbers = [1, 2, 3, 4, 5];
// var doubles = [];

// for (let i = 0; i < numbers.length; i++) {
//     doubles.push(numbers[i] * 2)    
// }

// console.log(numbers)
// console.log(doubles)
// console.log(i)


// Ejemplo 3

// const john = {
//     firstName: 'John',
//     lastName:'Doe',
//     birthYear: 1990,
//     calculateAge: function(birthYear) {
//         const today = new Date ()
//         const year = today.getFullYear ()
//         return year - birthYear
//     }
// }



// Ejemplo 4

// function logThis () {
//     console.log("Is this === window? " + (this === window))
// }

// const foo = {
//     logThis: logThis
// }

// logThis()

// foo.logThis()


//  Ejemplo 5

// const john = {
//     firstName: 'John',
//     lastName:'Doe',
//     birthYear: 1990,
//     calculateAge: function(birthYear) {
//         const today = new Date ()
//         const year = today.getFullYear ()
//         this.age = year - this.birthYear
//     }
// }

// console.log(john);
// john.calculateAge();



// Ejemplo arrow function y this

// const john = { // Variable
//     firstName: 'John', //
//     lastName:'Doe',    // Objetos
//     birthYear: 1990,   //
//     calculateAge: () => { // Método
//         const today = new Date ()
//         const year = today.getFullYear ()
//         this.age = year - john.birthYear
//     }
// }

// john.calculateAge()

// console.log('John tiene ' + window.age + ' años')
// console.log(this.age)
// document.write('John tiene ' + window.age + ' años')



// Reto 1

// let singers = [  // Esto es un array de objetos
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   ];
  
//   function pluck(list, propertyName) {
//     // Code goes here...
//     let values = [ ];
//     for (let i = 0; i < list.length; i++) {
//         // const element = array[index];
//         values.push(list[i][propertyName]);
//     }
//     return values
//   }
  
//   console.log( pluck(singers, 'name') );
//   // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
//   console.log( pluck(singers, 'band') );
//   // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
//   console.log( pluck(singers, 'born') );
//   // [1948, 1950, 1967, 1964]


// RETO 2

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890" 

// function createPhoneNumber(numbers) {

// }


// Reto 3 Encontrar elementos faltantes de un array
// findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]
