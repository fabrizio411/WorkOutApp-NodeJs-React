// New exercise form display
function toggleCreateForm() {
    document.getElementById('form-create').classList.toggle('active')
}



// Stats exercise display 
const statsDisplay = document.getElementsByClassName('exercise-display')
const listBtn = document.getElementsByClassName('list-btn')
const ifEmpty = document.getElementById('if-empty')

for (let i = 0; i < listBtn.length; i++) {
    listBtn[i].addEventListener('click', () => {
        ifEmpty.style.display = 'none'
        for (let x = 0; x < statsDisplay.length; x++) {
            if (statsDisplay[x].style.display === 'flex') statsDisplay[x].style.display = 'none'
        }
        statsDisplay[i].style.display = 'flex'
    })
}





// Delete exercise popup form
function togglePopup() {
    document.getElementById("delete-window").classList.toggle("active")
}