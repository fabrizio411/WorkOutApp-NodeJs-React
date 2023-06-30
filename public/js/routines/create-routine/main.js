// Add exercise from menu
const exerciseDisplay = document.getElementsByClassName('exercise-display')
const listBtn = document.getElementsByClassName('list-btn')
console.log(exerciseDisplay)

let count = 1
for (let i = 0; i < listBtn.length; i++) {
    let exercise_html = exerciseDisplay[i].innerHTML
    exerciseDisplay[i].innerHTML = ''
    listBtn[i].addEventListener('click', () => {
        exerciseDisplay[i].style.display = 'flex'
        exerciseDisplay[i].innerHTML = exercise_html
        exerciseDisplay[i].style.order = `${count}`
        count++
    })
}


// Remove exercise button
const oberver = new MutationObserver((mutationList) => {
  
  const containers = document.getElementsByClassName("exercise-display");

  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    const removeBtn = container.getElementsByClassName("remove-btn")[0];

    if (removeBtn) {
      removeBtn.addEventListener("click", () => {
        container.innerHTML = ''
        container.style.display = "none";
      });
    }
  }


})

const observerOptions = {
  childList: true,
  subtree: true
}

const toObserve = document.getElementById("exercises-display")
oberver.observe(toObserve, observerOptions)



// const removeBtn = document.getElementsByClassName('remove-btn')
// console.log(removeBtn)

// for (let i = 0; i < listBtn.length; i++) {
//     removeBtn[i].addEventListener('click', () => {
//         exerciseDisplay[i].style.display = 'none'
//         exerciseDisplay[i].innerHTML = ''
//     })
// }






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
            exrArray.push({
                name: form.elements["name"][i].value,
                class: form.elements["class"][i].value,
                note: form.elements["note"][i].value,
                sets: form.elements["sets"][i].value,
                reps: form.elements["reps"][i].value,
                rest: form.elements["rest"][i].value,
            })        
        }
    } else {
        exrArray.push({
            name: form.elements["name"].value,
            class: form.elements["class"].value,
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