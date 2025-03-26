//Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. 
//A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

programa {
  funcao inicio() {
 inteiro numeroDoFuncionario
 real horasTrabalhadas, valorPorHora, salarioDoFuncionario

 escreva("digite o numero do funcionario: ")   
 leia(numeroDoFuncionario)

 escreva("digite a quatidade de horas trabalhadas: ")
 leia(horasTrabalhadas)

 escreva("digite o valor recebido por hora trabalhada: ")
 leia(valorPorHora)

 salarioDoFuncionario = (horasTrabalhadas * valorPorHora)

 escreva("o salario é: R$ ", salarioDoFuncionario )
  }
}
