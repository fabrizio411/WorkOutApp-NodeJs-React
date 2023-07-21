// Check if the form input is a number
function isNumber(event) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
}



// New exercise form display
function toggleCreateForm() {
    document.getElementById('form-create').classList.toggle('active')
}



// Log meassure default date (today)
const inputDate = document.getElementById('date')
inputDate.value = new Date()