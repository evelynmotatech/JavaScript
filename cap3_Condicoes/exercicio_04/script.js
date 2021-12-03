//Programa para ler 3 lados e verificar se eles podem formar um triangulo;

function verificarTriangulo() {

  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);

  var outLados = document.getElementById("outLados");
  var outTipo = document.getElementById("outTipo");

  if ((ladoA == "" || ladoA <= 0 || isNaN(ladoA)) || (ladoB == "" || ladoB <= 0 || isNaN(ladoB)) || (ladoC == "" || ladoC <= 0 || isNaN(ladoC))) {
    outLados.innerHTML = "Dados inválidos! Prencha os dados corretamente!";
    outTipo.innerHTML = "";
    inLadoA.value = "";
    inLadoB.value = "";
    inLadoC.value = "";
    return
  } else if ((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) {
    outLados.innerHTML = "Não é possível formar um triângulo com esses lados!";
    outTipo.innerHTML = "";
    inLadoA.value = "";
    inLadoB.value = "";
    inLadoC.value = "";
    return
  }

  if ((ladoA == ladoB) && (ladoA == ladoC)) {
    outLados.innerHTML = `Lado A: ${ladoA}cm.<br>Lado B: ${ladoB}cm.<br>Lado C: ${ladoC}cm.`;
    outTipo.innerHTML = "Tipo de triângulo: Equilátero";
    inLadoA.value = "";
    inLadoB.value = "";
    inLadoC.value = "";
  } else {
    if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
      outLados.innerHTML = `Lado A: ${ladoA}cm.<br>Lado B: ${ladoB}cm.<br>Lado C: ${ladoC}cm.`;
      outTipo.innerHTML = "Tipo de triângulo: Isósceles";
      inLadoA.value = "";
      inLadoB.value = "";
      inLadoC.value = "";
    } else {
      outLados.innerHTML = `Lado A: ${ladoA}cm.<br>Lado B: ${ladoB}cm.<br>Lado C: ${ladoC}cm`;
      outTipo.innerHTML = "Tipo de triângulo: Escaleno";
      inLadoA.value = "";
      inLadoB.value = "";
      inLadoC.value = "";
    }
  }
}
btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);