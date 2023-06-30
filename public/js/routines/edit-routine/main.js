const exerciseDisplay = document.getElementsByClassName('inactive')
const listBtn = document.getElementsByClassName('list-btn')
const ifEmpty = document.getElementById("if-empty")
ifEmpty.style.display = 'none'

let order_count = 1

for (let i = 0; i < listBtn.length; i++) {
    let exercise_html = exerciseDisplay[i].innerHTML
    exerciseDisplay[i].innerHTML = ''
    listBtn[i].addEventListener('click', () => {
        exerciseDisplay[i].style.display = 'flex'
        exerciseDisplay[i].innerHTML = exercise_html
        exerciseDisplay[i].style.order = `${order_count}`
        order_count += 1

    })
}




// Remove exercise button
// For the already existent
const containersActive = document.getElementsByClassName("active")

for (let i = 0; i < containersActive.length; i++) {
    const containerActive = containersActive[i];
    const removeBtn = containerActive.getElementsByClassName("remove-btn")[0];

    if (removeBtn) {
        removeBtn.addEventListener("click", () => {
            containerActive.innerHTML = ''
            containerActive.style.display = "none";

        });
    }
}

// For the new ones created
const oberver = new MutationObserver((mutationList) => {
  
    const containers = document.getElementsByClassName("inactive");

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


    // If not exercises display
    const exerciseDisplayAll = document.getElementById('exercises-display')
    if (exerciseDisplayAll.offsetHeight === 0) {
        ifEmpty.style.display = 'flex'
    } else {
        ifEmpty.style.display = 'none'
    }
})

const observerOptions = {
    childList: true,
    subtree: true
}

const toObserve = document.getElementById("exercises-display")
oberver.observe(toObserve, observerOptions)





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
const routineRouteFull = form.getAttribute("action")
const routineRoute = routineRouteFull.substring(0, routineRouteFull.indexOf('?'))

console.log(routineRoute)
function sendData(data) {
    fetch(routineRoute, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Datos enviados correctamente');
          } else {
            console.error('ERROR');
            window.location.href = "/routines";
        }
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
  }