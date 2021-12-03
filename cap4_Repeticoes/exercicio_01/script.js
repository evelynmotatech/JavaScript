//Programa que repete o nome da fruta de acordo com o número informado.

function repetirFruta() {

  var inFruta = document.getElementById("inFruta");
  var inNumero = document.getElementById("inNumero");
  var outRepeticao = document.getElementById("outRepeticao");

  fruta = inFruta.value;
  num = Number(inNumero.value);
  outRepeticao.innerHTML = "";
  var i = 0;

  if ((fruta == "") || (num == "") || (isNaN(num)) || (!isNaN(fruta)) || (num < 1)) {
    outRepeticao.innerHTML = "Digite um número maior que 0 e o nome de uma fruta";
    inFruta.value = "";
    inNumero.value = "";
    inFruta.focus();
    return;
  }

  while (i < num) {
    i++;
    if(i == num){
      outRepeticao.innerHTML += fruta;
    }else{
    outRepeticao.innerHTML += `${fruta} * `;
    }    
  }

}

var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', repetirFruta);