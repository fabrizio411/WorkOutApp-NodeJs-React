





// NEW FOLDER FUNCTIONALITY
const fodlersBox = document.getElementById("folders-box")
// Display window
const newFolderBtn = document.getElementById("new-folder-btn");
const windowNewFolder = document.getElementById("new-folder-window");
// Window functionality
const form = document.getElementById("formulario");
const folderCancelBtn = document.getElementById("cancel-btn");
const folderSubmitBtn = document.getElementById("submit-btn");



function newFolder(folderName) {
    fodlersBox.innerHTML += `
<div class="folder">
<div class="folder-info-box">
    <h3 class="folder-name">${folderName} (<span id="routines-num"></span>)</h3>
    <div class="extra-menu">
    <svg class="svg-display-btn" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g  fill-rule="nonzero"><path d="M21.5 15c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5-.675-1.5-1.5-1.5-1.5.675-1.5 1.5zM16.5 15c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5.675 1.5 1.5 1.5 1.5-.675 1.5-1.5zM8.5 15c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5.675 1.5 1.5 1.5 1.5-.675 1.5-1.5z"></path></g></svg>
    <!-- DISPLAY ON CLICK -->
    <div class="menu-display">
        <button>
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round"  stroke-width="1.5"><path d="M14.89 9.39v10.999M9.39 14.889h10.999"></path></g></svg>
        <p>Add new routine</p>
        </button>
        <button id="new-folder-btn">                    
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path  stroke-width="1.5" d="M10 18.8V21h2.102L21 12.123 18.826 10z" fill="none" fill-rule="evenodd"></path></svg>
        <p>Rename Folder</p>
        </button>
        <button>
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round"  stroke-width="1.5"><path d="M11 10.5l9 9M11 19.5l9-9"></path></g></svg>
        <p>Delete Folder</p>
        </button>
    </div>
    </div>
</div>
    `
}



newFolderBtn.addEventListener("click", () => {
    windowNewFolder.style.display = "flex";
})

folderCancelBtn.addEventListener("click", () => {
    windowNewFolder.style.display = "none";
})

form.addEventListener("submit", event => {
    let folder_name = form.elements["folder-name"].value
    windowNewFolder.style.display = "none";
    form.reset()
    newFolder(folder_name)
    event.preventDefault()
})






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
