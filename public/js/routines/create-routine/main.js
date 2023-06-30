// Add exercise from menu
const exerciseDisplay = document.getElementsByClassName('exercise-display')
const listBtn = document.getElementsByClassName('list-btn')
console.log(exerciseDisplay)

let count = 1
for (let i = 0; i < listBtn.length; i++) {
    listBtn[i].addEventListener('click', () => {
        exerciseDisplay[i].style.display = 'flex'
        exerciseDisplay[i].style.order = `${count}`
        count++
    })
}


// Remove exercise button
const removeBtn = document.getElementsByClassName('remove-btn')
console.log(removeBtn)

for (let i = 0; i < listBtn.length; i++) {
    removeBtn[i].addEventListener('click', () => {
        exerciseDisplay[i].style.display = 'none'
    })
}






// Check if the form input is a number
function isNumber(event) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
}





// Handle form data
const form = document.getElementById("routine-form")
const nameExr = document.getElementsByClassName("name-text")

// Capture form submit values and prosses them in the structure needed
form.addEventListener("submit", async(event) => {
    event.preventDefault()

    let exrArray = []
    if (form.elements["sets"].length) {
        for (let i = 0; i < form.elements["sets"].length; i++) {

            let exrNameFullHTML = nameExr[i].innerHTML
            let exrName = exrNameFullHTML.substring(0, exrNameFullHTML.indexOf('\n'))

            exrArray.push({
                name: exrName,
                note: form.elements["note"][i].value,
                sets: form.elements["sets"][i].value,
                reps: form.elements["reps"][i].value,
                rest: form.elements["rest"][i].value,
            })        
        }
    } else {
        let exrNameFullHTML = nameExr[0].innerHTML
        let exrName = exrNameFullHTML.substring(0, exrNameFullHTML.indexOf('\n'))

        exrArray.push({
            name: exrName,
            note: form.elements["note"].value,
            sets: form.elements["sets"].value,
            reps: form.elements["reps"].value,
            rest: form.elements["rest"].value,
      })  
    }

    routTitle = form.elements["routine-title"].value
  
    const routineInfo = {
        title: routTitle,
        exercises: exrArray
    }

    console.log(JSON.stringify(routineInfo))
    sendData(routineInfo)
    form.reset()
})
  
  
// Resend those values estructured 
function sendData(data) {
    fetch('/create-routine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Datos enviados correctamente');
            window.location.href = "/routines";
        } else {
            console.error('Error al enviar los datos');
        }
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
  }