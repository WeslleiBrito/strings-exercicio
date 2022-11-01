//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log("Frase original:", frase)

const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log("Frase editada:", novaFrase)
const maiusculo = frase.slice(0, frase.indexOf("mas") - 1) + frase.slice(frase.indexOf("mas") - 1, frase.length - 1).toUpperCase()
console.log(maiusculo)