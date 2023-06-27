
const exerciseDisplay = document.getElementById("exercises-display")
const listBtn = document.getElementsByClassName("list-btn")



for (let i = 0; i < listBtn.length; i++) {
    listBtn[i].addEventListener("click", () => {
        let exercise_name = listBtn[i].innerHTML
        exerciseDisplay.innerHTML += `
        <div class="exercise-display">
        <div class="exercise-name">
          <h3>${exercise_name}</h3>
          <button class="remove-btn">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-width="1.5"><path d="M11 10.5l9 9M11 19.5l9-9"></path></g></svg>
            <div class="tooltip"><p>Remove Exercise</p></div>
          </button>
        </div>
        <form action="/" method="POST" class="exercise-form">
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
                <label for="sets">Reps goal:</label>
                <input id="sets" name="sets" type="number" min="0">
              </div>
              <div class="input-box">
                <label for="sets">Rest:</label>
                <input id="sets" name="sets" type="number" min="0">
              </div>
            </div>
          </div>
        </form>
      </div>
        `
    })
}
    

const exerciseHTML = await document.getElementsByClassName("exercise-display")
const removeBtn = await document.getElementsByClassName("remove-btn")
console.log(removeBtn)

for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", () => {
        console.log(removeBtn[i])
        exerciseHTML[i].innerHTML = ''
    })
}




// const form = document.getElementById("create-routine-form")
// form.addEventListener("submit", event => {
//     let folder_name = form.elements["folder-name"].value
//     form.reset()
//     event.preventDefault()
// })
