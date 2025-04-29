function exer1 (){
    let num1 = Number(prompt("Digite um número"))
    let num2 = Number(prompt("Digite outro número"))
    let soma = num1 + num2
    alert("A soma dos dois números é: " + soma)
}

function exer2 (){
    let num1 = Number(prompt("Digite um número"))
    let num2 = Number(prompt("Digite outro número"))
    let media = (num1 + num2) /2
    alert("A media dos dois números é: " + media)
}

function exer3 (){
    let nome = (prompt("Digite seu nome: "))
    alert("Olá"  +  nome  + "seja bem vinda!")
}

function exer4 (){
    let temperatura = Number(prompt("Qual sua temperatura em graus celcios? "))
    let resultado = ((temperatura * 9/5) + 32)
    alert("Sua temperatura esta em: " + resultado)

}

function exer5 (){
    let numero = Number(prompt("Digite um número: "))
    if (numero % 2 == 0) {
    alert ("O número é par. ")
    }else{
    alert ("O número é impar. ")
    }
    
}
    

function exer6 (){
    let nota1 = Number(prompt("Digite a primeira nota: "))
    let nota2 = Number(prompt("Digite a segunda nota: "))
    let nota3 = Number(prompt("Digite a terceira nota: "))
    let media = (nota1 + nota2 + nota3) /3
    alert("A média das notas é: " + media)
}

function exer7 (){
    let Peso = Number(prompt("Digite o seu peso em kg: "))
    let Altura = Number(prompt("Digite sua altura em metros: ")) 
    let imc = peso / (altura * altura)
    alert ("Seu IMC é: " + imc)
}

function exer8 (){
    let ano = Number(prompt("Digite o ano: "))
    
}

function exer3lista2 (){
    let nome = prompt("Digite seu nome para saber o nome do super héroi: ")
    let min = 1
    let max = 3
    let numeroaleatorio = Math.floor(Math.random() * (max - min) + min)

    // Math.ceil()-> arredonda pra cima
    // Math.floor()-> arredonda pra baixo
    // Math.roud()-> arredonda pro mais proximo
    

    let frase1 = "Capitão América"
    let frase2 = "Homem De Ferro"
    let frase3 = "Homem Aranha"

    if(numeroaleatorio === 1) {
        alert (nome + frase1)
    }
       else if(numeroaleatorio === 2) {
        alert (nome + frase2)
       } else if (numeroaleatorio === 3) {
        alert (nome + frase3)
       }
       
}

function exerStarUbers (){
    let distancia = Number(prompt("Digite a distância em KM: "))
    let velocidadeDaLuz = 300.000 // Km por segundo
    let tempo = distancia / velocidadeDaLuz 
    alert (resultado = "O tempo estimado da viagem é: " + tempo)
}

function exerStarUbers2 (){
    let distancia = Number(prompt("Digite a distância em KM: "))
    let velocidadeDaLuz = 300.000 // Km por segundo
    let tempo = distancia / velocidadeDaLuz 
    alert (resultado = "O tempo estimado da viagem é: " + tempo)
    
    if (tempo >=60) {
        let minutos = tempo / 60
        alert (" O tempo estimado em minutos é: " + minutos)
    }
    if (tempo>= 3600) {
        let horas = tempo / 3600
        alert (" O tempo estimado em horas é: " + horas)

    }
    if (tempo>= 86400) {
        let dia = tempo / dia
        alert ("O tempo estimado em dias é: " + dia)
    }
    if (tempo>= 2592000){
        let mes = tempo / mes
        alert (" O tempo estimado em dias é: " + mes)
    }
    if (tempo>= 31104000){
        let ano = tempo / ano
        alert (" O tempo estimado em anos é: " + ano)
    }
               
}
 
function exerDecodificadorMensagem (){
    const mapaVogais = {
        'a' : '@',
        'e' : '!',
        'i' : '&',
        'o' : '*',
        'u' : '#',
        'á' : '@', 'é': '!', 'í':'&', 'ó':'*', 'ú':'#',
        'ã' : '@', 'õ' : '*', 'â':'@', 'ê':'!', 'ô':'*'
    }

    const texto = (prompt("Digite uma frase: "))
    const resultado = texto.split('').map(char => {
        return mapaVogais[char.toLowerCase()] || char;
    }).join('');

    alert ("Frase Codificada: " + resultado);
}

