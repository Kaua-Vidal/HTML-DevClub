const list = document.querySelector('ul')
let myLi = ''
const buttonShowAll = document.querySelector('.show-all')

function showAll() {
    menuOptions.forEach((product) => {
        myLi += `
    <li >
            <img src="${product.src}" alt="">
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
     `
    })

    list.innerHTML = myLi
}


buttonShowAll.addEventListener('click', showAll)