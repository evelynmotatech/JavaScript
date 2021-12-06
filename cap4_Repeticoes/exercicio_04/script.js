//Programa para ler o número de linhas inseridas pelo usuário e imprimir asteriscos.

function fabricaEstrelas(numeroLinhas) {

  var inNumeroLinhas = document.getElementById("inNumeroLinhas").value;
  var outEstrelas = document.getElementById("outEstrelas");

  var numeroLinhas = Number(inNumeroLinhas);

  for (var i = 1; i <= numeroLinhas; i++) {
    var estrelas = "";
    for (var j = 1; j <= i; j++) {
      estrelas += "*";
    }
    outEstrelas.innerHTML += estrelas + "<br>";
  }
  
}
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', fabricaEstrelas);