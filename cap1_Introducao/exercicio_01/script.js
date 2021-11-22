//Elaborar um programa que leia um número. Calcule e informe os seus vizinhos.

var num = Number(prompt("Digite um número: "));
var num_anterior = num - 1;
var num_posterior = num + 1;


alert('O número digitado foi ' + num + '. O número anterior a ele é ' + num_anterior + ' e o número posterior a ele é ' + num_posterior + '.');
