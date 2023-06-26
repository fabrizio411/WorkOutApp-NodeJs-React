const form = document.getElementById("create-routine-form")
form.addEventListener("submit", event => {
    let folder_name = form.elements["folder-name"].value
    form.reset()
    event.preventDefault()
})
