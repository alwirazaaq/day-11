let barIsOpen = false
function openBar() {
    let menuContainer = document.querySelector('.navContainer')
    if(barIsOpen) {
        menuContainer.style.display = 'none' 
        barIsOpen = false
    }else {
        menuContainer.style.display = 'block'
        barIsOpen = true
    }
}
