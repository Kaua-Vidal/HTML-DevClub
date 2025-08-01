/**
 * vai reduzir tudo a um único valor
 */

const cart = [
    { productName: 'Abobora', pricePerKg: 5, kg: 1},
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3},
    { productName: 'Limão', pricePerKg: 1.2, kg: 2},
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67},
    { productName: 'Morango', pricePerKg: 11.9, kg: 3}
]

const totalPrice = cart.reduce((acc, item) => {
    return acc + (item.pricePerKg * item.kg) 
}, 0)

console.log(`O valor total da compra é: R$ ${totalPrice.toFixed(2)}`)