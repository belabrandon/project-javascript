var valor = 0;
var resultado = 0;
var resultado2;
var valor2;
var valor3;
var element;
//calculadora simples
function limpaTela(){
    document.getElementById("visor").value = "";
}
function unindo(x){
    var valor = 0
    valor = x.value
    document.getElementById("visor").value += valor;

}
function calcula(){
    var resultado = 0;
    resultado = document.getElementById("visor").value
    document.getElementById("visor").value = eval(resultado);
}


//calculadora científica
function pi(y){
    y = y.value
    valor2 = document.getElementById("visor2").value += 3.1415;
}
function aoQuadrado(){
    valor2 = document.getElementById("visor2").value
    valor2 = Number(valor2)
    valor3 = valor2**2
    document.getElementById("visor2").value = valor3        
}
function aoCubo(){
    valor2 = document.getElementById("visor2").value
    valor2 = Number(valor2)
    valor3 = valor2**3
    document.getElementById("visor2").value = valor3 
}
function raizQuadrada(){
    valor2 = document.getElementById("visor2").value
    valor2 = Number(valor2)
    valor3 = Math.sqrt(valor2);
    document.getElementById("visor2").value = valor3 
}
function limpaTela2(){
    document.getElementById("visor2").value = "";
}
function unindo2(y){
    var valor2 = 0
    valor2 = y.value
    document.getElementById("visor2").value += valor2;

}
function calcula2(){
    var resultado2 = 0;
    resultado2 = document.getElementById("visor2").value
    document.getElementById("visor2").value = eval(resultado2);
}


function apareceCalcComum() {
    let calculadora1 = document.getElementById("calculadora1"); // referencia calc comum
    let calculadora2 = document.getElementById("calculadora2"); // referencio calc cientifica
  
    calculadora1.style.display = "block"; // aparece na tela quando usuario clica
    calculadora2.style.display = "none"; // esconde a calculadora cientifica
  }

  function apareceCalcCient() {
    let calculadora1 = document.getElementById("calculadora1"); 
    let calculadora2 = document.getElementById("calculadora2");  
  
    calculadora1.style.display = "none"; // esconde a calculadora comum
    calculadora2.style.display = "block"; // aparece na tela quando usuario clica
  }