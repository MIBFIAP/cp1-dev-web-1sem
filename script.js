// Questão 1
/*
let nome;
if (nome == undefined) {
    document.write("Essa variável é indefinida, ou seja não tem definição.")
}
*/

// Questão 2
/*
let num = 10;
if (num%2 == 0){
    document.write("Essa divisão é igual a 0")
}
else{
    document.write("Essa divisão não é igual a 0")
}
*/



//Questão 3
/*
let peso =prompt("Digite seu peso em kg: ")
let altura =prompt("digite sua Altura em metros (x.xx): ")

 imc = peso / (altura * altura);
 

if (imc < 18.5){
    document.write("Abaixo do peso.")
}
else if (imc >= 18.5 && imc <= 24.9){
    document.write("Peso ideal.")
}
else{
    document.write("Acima do peso.")
}
console.log(imc)
*/

/*
Questao 4


let idade =prompt("digite sua idade: ")

if(idade <= 12){
    document.write("Você é uma criança.")
}
else if (idade <=17){
    document.write("Você é um adolescente.")
}
else if (idade <=60){
    document.write("Você é um adulto.")
}
else{
    document.write("Você é um idoso.")
}
*/

//Questao 5
/*

    let texto = prompt("Digite seu login: ")
    let senha = prompt("Digite sua senha: ")

let texto01 = "admin"
let senha01 = 1234

if(texto == texto01 && senha == senha01){
   document.write("O login foi realizado com sucesso")
}else{
    document.write("Ouve uma falha de autenticação.")
}

*/

//Questao 6

/*
var n1, n2, n3, n4, n5, n6, n7;

n1 = parseFloat(prompt("Informe a primeira nota: "));
n2 = parseFloat(prompt("Informe a segunda nota: "));
n3 = parseFloat(prompt("Informe a terceira nota: "));
n4 = parseFloat(prompt("Informe a quarta nota: "));
n5 = parseFloat(prompt("Informe a quinta nota: "));
n6 = parseFloat(prompt("Informe a sexta nota: "));
n7 = parseFloat(prompt("Informe a sétima nota: "));

media = (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;

console.log(media)

if (media >= 6) {
document.write("Aprovado");
} else {
document.write("Reprovado");
}
*/



/*
//Questão 7

let nome = prompt("Digite seu Nome: ")
let idade = prompt("Digite sua Idade: ")
let curso = prompt("Digite seu Curso: ")
let ano = prompt("Digite o ano que você ingressou: ")


document.write("Seu nome é ", nome)
document.write("<br>")
document.write("Você tem ", idade, " anos de idade")
document.write("<br>")
document.write("Você cursa: ", curso)
document.write("<br>")
document.write("Você ingressou no ano de: ", ano)
*/

// Questão 8
/*
let txt = "O  LUGAR  VIRA TECNOLOGIA"
console.log(txt.replace("LUGAR", "MUNDO"));
*/

// Questão 9

let stg = "123.6789"
let num = parseFloat(stg);
console.log(num.toFixed(2));
