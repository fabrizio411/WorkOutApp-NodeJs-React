
const exerciseDisplay = document.getElementById("exercises-display")
const listBtn = document.getElementsByClassName("list-btn")


for (let i = 0; i < listBtn.length; i++) {
    listBtn[i].addEventListener("click", () => {
        let exercise_name = listBtn[i].innerHTML
        exerciseDisplay.innerHTML += `
        <div class="exercise-display">
        <div class="exercise-name">
          <h3 class="name-text">${exercise_name}</h3>
          <button class="remove-btn">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-width="1.5"><path d="M11 10.5l9 9M11 19.5l9-9"></path></g></svg>
            <div class="tooltip"><p>Remove Exercise</p></div>
          </button>
        </div>
        <div class="exercise-form">
          <div class="exercise-form-info">
            <div class="pinned-note">
              <label for="note">Note</label>
              <textarea id="note" name="note" placeholder="Add Pinned Note"></textarea>
            </div>
            <div class="exercise-data">
              <div class="input-box">
                <label for="sets">Sets:</label>
                <input id="sets" name="sets" type="number" min="0">
              </div>
              <div class="input-box">
                <label for="reps">Reps goal:</label>
                <input id="reps" name="reps" type="number" min="0">
              </div>
              <div class="input-box">
                <label for="rest">Rest:</label>
                <input id="rest" name="rest" type="number" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    })
}
    




// const exerciseHTML = document.getElementsByClassName("exercise-display")
// const removeBtn = document.getElementsByClassName("remove-btn")
// console.log(removeBtn)

// for (let i = 0; i < removeBtn.length; i++) {
//     removeBtn[i].addEventListener("click", () => {
//         console.log(removeBtn[i])
//         exerciseHTML[i].innerHTML = ''
//     })
// }



const form = document.getElementById("routine-form")
const nameExr = document.getElementsByClassName("name-text")

// Capture form submit values and prosses them in the structure needed
form.addEventListener("submit", event => {
    event.preventDefault()

    let exrArray = []
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
        } else {
            console.error('Error al enviar los datos');
        }
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
  }