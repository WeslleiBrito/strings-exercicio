
function comidasPreferidas(){
    const nome = prompt("Qual o seu nome?")
    const comida1 = prompt("Qual a sua primeira comida preferida?")
    const comida2 = prompt("Qual a sua segunda comida preferida?")
    const comida3 = prompt("Qual a sua terceira comida preferida?")

    console.log(`Estas são as comidas favoritas de ${nome}\n- ${comida1}\n- ${comida2}\n- ${comida3}`)

}

comidasPreferidas()