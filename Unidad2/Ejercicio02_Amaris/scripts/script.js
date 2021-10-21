/*
            la CFE genera la factura con base en la
            lectura de Kwh consumidos en un bimestre
            
            
            los primeros 300kw so la tarifa 1 (basica)
            los siguientes 300kw son a la tarifa 2 (intermedia)
            de 601kw hacia arriba son la tarifa de alto consumo

            dado un consumo de kw y los costos de cada tarifa 
            escriba un pequeño programa en javascript que obtenga
            el total a pagar y presente el detalle a pagar a cada
            tarifa

            1000kw  t1 $1, t2 $3, t3 $5

            300 = $1
            300 = $3
            400 = $5
           -----------------------------
           $3200 

        */

            let array = [600, 470, 170, 430, 300];
            var suma = 0;
            var val1 = 600;
            var val2 = 915;
            var val3 = 170;
            var val4 = 150;
            var val5 = 300;

            for(let i of array){
                suma += i;
            }

            let restaUno = 394 - val1;
            let restaDos = 394 - val2;
            let restaTres = 394 - val3;
            let restaCuatro = 394 - val4;
            let restaCinco = 394 - val5;

            let cuadrado = (Math.pow(restaUno,2)) + (Math.pow(restaDos,2)) + (Math.pow(restaTres,2)) + (Math.pow(restaCuatro,2)) + (Math.pow(restaCinco,2));

            let division = cuadrado / 5;

            let raiz = parseInt(Math.sqrt(division)) + " " + "mm";

            console.log(raiz);