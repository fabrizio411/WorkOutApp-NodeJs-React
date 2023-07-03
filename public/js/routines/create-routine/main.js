// Add exercise from menu
const exerciseDisplay = document.getElementsByClassName('exercise-display')
const listBtn = document.getElementsByClassName('list-btn')
const ifEmpty = document.getElementById("if-empty")


let order_count = 1
for (let i = 0; i < listBtn.length; i++) {
    let exercise_html = exerciseDisplay[i].innerHTML
    exerciseDisplay[i].innerHTML = ''
    listBtn[i].addEventListener('click', () => {
        exerciseDisplay[i].style.display = 'flex'
        exerciseDisplay[i].innerHTML = exercise_html
        exerciseDisplay[i].style.order = `${order_count}`
        order_count++
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