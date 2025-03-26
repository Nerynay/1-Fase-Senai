//Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
//A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
//Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.


programa {
  funcao inicio() {
  real nota1, nota2, nota3, media

  
  escreva("digite a nota 1: ") 
  leia(nota1)

  escreva("digite a nota 2: ") 
  leia(nota2)

  escreva("digite a nota 3: ") 
  leia(nota3)

  media = (nota1 * 2 + nota2 *3 + nota3 * 5) / 10

  escreva("a media é: ", media)

  }
}
