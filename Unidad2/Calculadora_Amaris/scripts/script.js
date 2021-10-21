
function suma()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let res = parseFloat (num1) + parseFloat(num2);

    document.getElementById("resultado").innerHTML = "Resultado: "+res;

}

function resta()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let res = parseFloat (num1) - parseFloat(num2);

    document.getElementById("resultado").innerHTML = "Resultado: "+res;

}

function multi()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let res = parseFloat (num1) * parseFloat(num2);

    document.getElementById("resultado").innerHTML = "Resultado: "+res;

}

function div()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let res = parseFloat (num1) / parseFloat(num2);

    document.getElementById("resultado").innerHTML = "Resultado: "+res;

}

function prom()
{
        let suma=0;
        let a=0;
        let arreglo=document.getElementById("eva").value;


        do{
            a++;
            let calif=parseFloat(prompt("Calificación "+a+": "));
            suma=suma+calif;
            document.getElementById("calificaciones").innerHTML = "Calif. "+a+": "+calif;
        }while(a<arreglo);
        

        let res = suma / arreglo;
        document.getElementById("resultado").innerHTML = "Resultado: "+res;

}

function potencia(c, p) {
    return Math.pow(c, p);
}

function dev()
{
        let suma=0;
        let cuadrados = 0;
        let arreglo=document.getElementById("eva").value;

    for (let a = 1; a <= arreglo; a++) {
        let numero = parseFloat(prompt('Numero '+a+': '))
        suma = suma + numero;
        cuadrados = cuadrados + potencia(numero, 2);
    }
    let media = suma / arreglo;
    let varianza = (cuadrados / (arreglo - 1)) - ((arreglo * potencia(media, 2)) / (arreglo - 1));
    let raiz = Math.sqrt(varianza);
    document.getElementById("resultado").innerHTML = "Resultado: "+raiz;
}