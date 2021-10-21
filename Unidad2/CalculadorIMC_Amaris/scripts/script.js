
function calcular()
{
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc=0;
    var bp = "Bajo Peso";
    var nor = "Normal";
    var sob = "Sobrepeso";
    var obs = "Obesidad";

    if(peso!="" && altura!=""){
        imc = (peso / (altura* altura));

        if(imc<18.5)
        { 
            document.getElementById("imc").innerHTML = ""+imc;
            document.getElementById("tipo").innerHTML = ""+ bp;
            document.getElementById("tipo").setAttribute("class",("bp"));
            document.getElementById("imagenes").innerHTML='<img src="img/bp.png" />';
            if(imc<16.00)
            {
                document.getElementById("tipo2").innerHTML = ""+ "Delgadez severa";
                document.getElementById("tipo").setAttribute("class",("tipo2"));
                document.getElementById("tipo").setAttribute("class",("bp"));
            }else
                if(imc => 16.00 && imc <= 16.99)
                {
                    document.getElementById("tipo2").innerHTML = ""+ "Delgadez moderada";
                    document.getElementById("tipo").setAttribute("class",("tipo2"));
                    document.getElementById("tipo").setAttribute("class",("bp"));
                }else
                    if(imc>=17.00 && imc<=18.49)
                    {
                        document.getElementById("tipo2").innerHTML = ""+ "Delgadez aceptable";
                        document.getElementById("tipo").setAttribute("class",("tipo2"));
                        document.getElementById("tipo").setAttribute("class",("bp"));
                    }
        }
        else 
            if(imc>=18.5 && imc<=24.9)
            { 
                document.getElementById("imc").innerHTML = ""+imc;
                document.getElementById("tipo").innerHTML = ""+nor;
                document.getElementById("tipo").setAttribute("class",("nor"));
                document.getElementById("imagenes").innerHTML='<img src="img/nor.png" />';
            }
        else 
            if(imc>=25 && imc<=29.9)
            { 
                document.getElementById("imc").innerHTML = ""+imc;
                document.getElementById("tipo").innerHTML = ""+sob;
                document.getElementById("tipo").setAttribute("class",("sob")); 
                document.getElementById("imagenes").innerHTML='<img src="img/sob.png" />';
                document.getElementById("tipo2").innerHTML = ""+ "Pre-obeso (riesgo)";
                document.getElementById("tipo").setAttribute("class",("tipo2"));
            }
        else 
            if(imc>30)
            { 
                document.getElementById("imc").innerHTML = ""+imc;
                document.getElementById("tipo").innerHTML = ""+obs;
                document.getElementById("tipo").setAttribute("class",("obs")); 
                document.getElementById("imagenes").innerHTML='<img src="img/obs.png" />';
                
                if(imc>=30.00 && imc <= 34.99)
            {
                document.getElementById("tipo2").innerHTML = ""+ "Obeso tipo 1 (riesgo moderado)";
                document.getElementById("tipo").setAttribute("class",("tipo2"));
                document.getElementById("tipo").setAttribute("class",("obs"));
            }else
                if(imc>=35.00 && imc <= 39.99)
                {
                    document.getElementById("tipo2").innerHTML = ""+ "Obeso tipo 2 (riesgo severo)";
                    document.getElementById("tipo").setAttribute("class",("tipo2"));
                    document.getElementById("tipo").setAttribute("class",("obs"));
                }else
                    if(imc>=40)
                    {
                        document.getElementById("tipo2").innerHTML = ""+ "Obeso tipo 3 (riesgo my severo)";
                        document.getElementById("tipo").setAttribute("class",("tipo2"));
                        document.getElementById("tipo").setAttribute("class",("obs"));
                    }
            }

    }else{
        alert("Debes ingresar todos los datos")
    }

}


function limpiar()
{
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("imc").innerHTML = "";
    document.getElementById("tipo").innerHTML = "";
    document.getElementById("imagenes").innerHTML="";
    document.getElementById("tipo2").innerHTML = "";
}