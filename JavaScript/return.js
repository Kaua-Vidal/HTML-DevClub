const card = [10, 244, 99, 2, 20, 33, 250]



function calcDesconto(array) {


    let total = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 30) {
            let valorDescontado = array[i] - (array[i] * 0.10)
            total += valorDescontado
        } else {
            total += array[i]
        }
    }

    return total
}


console.log(`Esse é total: ${calcDesconto(card)}`)