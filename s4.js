
// //     Ejercicio 1
// function calculateAge(birthYear) {
//     const age = 2022 - birthYear
//     return age;
// }

// // const ageJohn = calculateAge('1969');

// // console.log('Edad de John es ', ageJohn);

//     Ejercicio 2
// function yearsUntilRetirement(yearOfBirth, name) {
//     const age = calculateAge(yearOfBirth)
//     const retirement = 65 - age;
//     console.log(`${name} retires in ${retirement} years`)
// }

// yearsUntilRetirement(1969, 'Jose');


//     Reto 1
// function power(base, exponent) {
//     let resultado = 1;
//     for (let i = 0; i < exponent; i++) {
//         resultado = resultado * base;
//     }

//     console.log('El resultado es ', resultado)
// }

// power(2, 3);

    //Ejercicio 3
// const whatDoYouDo = function(job, name) {
//     switch (job) {
//         case 'developer':
//             return name + ' develops cool apps'

//         case 'designer':
//             return name + ' designs awesome websites'

//         default:
//             return name + ' does something else'
//     }
// }

// console.log(whatDoYouDo('pedagogo', 'Gerardo'))


// const factorial = function fac(num) {
//     return num < 2 ? 1 : num * fac(num - 1);
// }

// console.log(factorial(5))


    // Función anónima
// function longName() {
//     const name = 'John Doe';
//     console.log(name)
// }

(function() {
    const name = 'John Doe';
    console.log(name)
})()