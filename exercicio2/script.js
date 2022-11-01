const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(`Tamanho da string original: ${minhaString.length}`)

const novaString = minhaString.trim()

console.log(`Tamanho da string editada: ${novaString.length}`)
console.log(novaString.slice(0, novaString.indexOf("_") - 1), "sticioso" + novaString.slice(novaString.length - 1))
