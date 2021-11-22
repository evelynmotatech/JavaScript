//Programa para ler duas notas de um aluno em uma disciplina e calcule sua média.

disciplina = prompt("Digite o nome da disciplina: ");
nota_1 = parseFloat(prompt("Digite a primeira nota: "));
nota_2 = parseFloat(prompt("Digite a segunda nota: "));
media = ((nota_1 + nota_2) / 2).toFixed(2);

alert("A média da disciplina " + disciplina + " é " + media);