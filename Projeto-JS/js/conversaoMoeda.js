//  USD 5,4419  
// CAD 4,3876 
// EUR 6,5743 
// GBP 7,5636 
// ARS 0,05830 
// real 1 

function converter() {
    var entrada = document.getElementById("valorConverter").value;//Recebe o valor de entrada
    entrada = entrada.replace(",", "."); //se receber valor com , transforma pra .
    entrada = parseFloat(entrada); // converte o valor de entrada para float

    function calcular(moeda) {
        switch (moeda) {
            case "USD":
                cota = 5.4419;
                simbolo = "US$"
                break;
            case "CAD":
                cota = 4.3876;
                simbolo = "C$"
                break;
            case "BRL":
                cota = 1;
                simbolo = "R$"
                break;
            case "EUR":
                simbolo = "€"
                cota = 6.5743;
                break;
            case "GBP":
                cota = 7.5636;
                simbolo = "£"
                break;
            case "ARS":
                cota = 0.0583;
                simbolo = "$"
                break;
        }
    }
     
        //  Verifica o valor de entrada se é número e maior que zero
        if (isNaN(entrada) || entrada < 0) { // se não for, alerta erro e pega a entrada de novo
            alert("ERRO! Digite um número válido.");
            entrada = document.getElementById("valorConverter").value;
        }
        else {// se estiver correto pega os valores das moedas no elemento option
            var valor1 = document.getElementById("deMoedas").value;
            var valor2 = document.getElementById("paraMoedas").value;
            var resul = 0; //seta um valor de início pro resul
                calcular(valor1);
                var de = cota; //cria uma variável pra receber o valor da cotação da 1º moeda
                calcular(valor2);
                var para = cota; //cria uma variável pra receber o valor da cotação da 2º moeda
                resul = ((de / para) * entrada).toFixed(2);//

                resul =resul.replace(".",",");
            //mostra o resultado na tela
            document.getElementById("resultado").innerHTML = "Valor convertido: " + simbolo + resul;
        }
    } 

