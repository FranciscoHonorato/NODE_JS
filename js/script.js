let burguer = document.querySelector('.burguer')
let itemMenu = document.querySelector('.itens-menu')
let itemList = document.querySelectorAll('.item')

let bgLight = document.querySelectorAll('.bg-light')
let light = document.querySelectorAll('.light')


function clickMenu() {

    if (itemMenu.style.display == 'none') {
        itemMenu.style.display = "flex"
    } else {
        itemMenu.style.display = "none"
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
