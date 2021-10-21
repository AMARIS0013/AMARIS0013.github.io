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

            var t1 = 300;
            var t2 = 300;
            var t3 = 400;

            let ta1 = t1 * parseInt(1);
            let ta2 = t2 * parseInt(3);
            let ta3 = t3 * parseInt(5);

            console.log("300 * 1");
            console.log("300 * 3");
            console.log("400 * 5");

            console.log(ta1);
            console.log(ta2);
            console.log(ta3);

            let resultadoFinal = ta1 + ta2 + ta3;

            console.log("Total a pagar" + " " + resultadoFinal);
