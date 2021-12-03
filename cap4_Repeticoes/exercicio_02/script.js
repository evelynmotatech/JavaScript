//Programa que calcule a previsão da população de chinchilas de acordo com a população informada e o número de anos. 

function populacaoChinchilas() {
  var inQntChinchilas = document.getElementById("inQntChinchilas");
  var inAnos = document.getElementById("inAnos");
  var outQntChinchilas = document.getElementById("outQntChinchilas");

  let qntChinchilas = Number(inQntChinchilas.value);
  let anos = Number(inAnos.value);
  let total = qntChinchilas;
  let qnt = '';


  if (qntChinchilas < 2 || anos <= 0 || isNaN(anos) || isNaN(qntChinchilas)) {
    outQntChinchilas.innerHTML = "Valores inválidos!";
    inQntChinchilas.value = "";
    inAnos.value = "";
  }

  for (i = 1; i <= anos; i++) {
   qnt += `${i}º ano: ${total} Chinchilas.<br>`;
   total *= 3;
  }
  outQntChinchilas.innerHTML = qnt;
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", populacaoChinchilas);