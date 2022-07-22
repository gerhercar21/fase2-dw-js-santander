// Ejercicio 1 sesión 2

    // const time = 5;
    // let greeting;

    // if (time < 0 || time > 23) {
    //     greeting = 'Hora inválida'
    // }
    // if (time < 12 && time >= 0) {
    //     greeting = 'Buenos días!'
    // } else if (time < 19 && time >= 12) {
    //     greeting = 'Buenas tardes!'
    // } else if (time >= 19 && time <= 23) {
    //     greeting = 'Buenas noches!'
    // } else {
    //     greeting = 'Hora inválida'
    // }

    // console.log(greeting);

// Ejercicio 2 sesión 2

    // const day = 2;
    // let text

    // switch (day) {
    //     case 1:
    //         text = 'Monday'
    //         break;
    //     case 2:
    //         text = 'Tuesday'
    //         break;
    //     case 3:
    //         text = 'Wednesday'
    //         break;
    //     case 4:
    //         text = 'Thursday'
    //         break;
    //     case 5:
    //         text = 'Friday'
    //         break;
    //     case 6:
    //         text = 'Saturday'
    //         break;
    //     case 7:
    //         text = 'Sunday'
    //         break;
    //     default: 
    //         text = 'Valor inválido'
    //         break;
    // }

    // console.log(text);


    // Ejercicio 3

    // const speed = 40;
    // let message;

    // message = speed > 100 ? 'Vas muy rápido' : 'Vas a la velocidad correcta';

    // const isFast = speed > 100;
    
    // console.log(message)
    // console.log('En verdad vas muy rápido?', isFast);



    // Ejemplo bucle

    // console.log('Hello world!')

    // for (let index = 0; index < 500; index++) {
    //     if (index === 199) continue
    //     console.log('Hello world! repetición', index)
    // }

    // Reto 2: imprimir pares del 0 al 100

    // for(var i = 0; i <= 100; i++) {
    //     if( i % 2 === 0 ) {
    //       console.log( i );
    //     }
    // }

    // Reto 3; encontrar números primos de 0 a 100

    for (let counter = 2; counter <= 100; counter++) {
        let isPrime = true;

        for(let index = 2; index <= counter; index++) {
            if(counter % index === 0 && index !== counter) {
                isPrime = false
            }
        }
        if (isPrime) console.log('Número primo es', counter)
    }
