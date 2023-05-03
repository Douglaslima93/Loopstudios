function clickMenu () {
    var menu = document.querySelector('#menu')

    if (menu.style.display === 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function clickClose () {
    var menu = document.querySelector('#menu')

    if (menu.style.display === 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}
