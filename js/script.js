let burguer = document.querySelector('.burguer')
let itemMenu = document.querySelector('.itens-menu')
let itemList = document.querySelectorAll('.item')

let bgLight = document.querySelectorAll('.bg-light')
let light = document.querySelectorAll('.light')


function clickMenu() {

    if (itemMenu.style.display == 'flex') {
        itemMenu.style.display = "none"
    } else {
        itemMenu.style.display = "flex"
    }
}


if (burguer.style.display === 'flex') {
    for (let item of itemList) {
        item.addEventListener('click', clickMenu)
    }
}


function mudarTema() {
    for (let bg of bgLight) {
        bg.classList.toggle('bg-dark')
    }

    light[0].classList.toggle('dark')
}

window.addEventListener('resize', () => {
    let largura = window.innerWidth
    if (largura > 768) {
        itemMenu.style.display = "flex"
    } else {
        itemMenu.style.display = "none"
    }
})