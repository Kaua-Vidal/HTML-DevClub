/**
 * vai passar os valores para um novo array
 */

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number => {
    if (number < 100 || number % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(newList)