// Função cor padrão
var btn2 = document.getElementById('btn2');

function bgDefault() {
    document.body.style.backgroundColor = "#eee";
}
// Função com preta
var btn3 = document.getElementById('btn3');

function bgChange() {
    document.body.style.backgroundColor = "#111";
}

//Função aumenta e diminui fonte
function fonte(e){
    var elemento = $ (".acessibilidade");
    var fonte = elemento.css('font-size');
    if (e == 'a') {
        elemento.css("fontSize", parseInt(fonte) + 1);
    } 
    else if('d'){
        elemento.css("fontSize", parseInt(fonte) - 1);
    }
}