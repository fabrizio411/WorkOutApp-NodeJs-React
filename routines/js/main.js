// MENU BUTTONS DISPLAY
const menuButton = document.getElementsByClassName("extra-menu");
const menuDisplay = document.getElementsByClassName("menu-display");



for (let i = 0; menuButton.length; i++) {
    menuButton[i].addEventListener ("click", () => {
        if (menuDisplay[i].style.display === "none") {
            menuDisplay[i].style.display = "block";
        } else {
            menuDisplay[i].style.display = "none"
        }
    })
}
