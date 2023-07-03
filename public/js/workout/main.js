// Check if the form input is a number
function isNumber(event) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
}



// If is reps or duraton only Display
const evenRows = document.getElementsByClassName('even')

for (let i = 0; i < evenRows.length; i++) {
    evenRows[i].style.background = '#191a1b'
}



// Display the only reps and only dur exercises
const setRow = document.getElementsByClassName('set-row')

for (let i = 0; i < setRow.length; i++) {
    let sibiling = setRow[i].previousElementSibling
    let lastChild = setRow[i].lastElementChild

    if (setRow[i].getElementsByClassName('input-conditional').length === 0) {
        lastChild.style.gridColumn = '4 / 5'
        sibiling.lastElementChild.style.gridColumn = '4 / 5'
    }
}
