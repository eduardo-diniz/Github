/**
 * Soma dois numeros passados como paramentro

 * @param {number} num1 
 * @param {numeber} num2 
 * @returns A soma dos dois numeros passados
 */

 
function soma (num1, num2){

return num1 + num2
    
}

function subtracao (num1, num2){

    return num1 - num2
}

function multiplicacao (num1, num2){

    return num1 * num2
}
function divisao (num1, num2){
    if (num2 === 0){

        return new Error ('Não é possivel dividir por 0')

    }
        return num1 / num2
    }

  
    