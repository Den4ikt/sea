let burger= document.querySelector(".burger")
let menu= document.querySelector(".menu-container")
burger.onclick = () => {
    menu.classList.toggle("show")
    burger.classList.toggle("close")
}