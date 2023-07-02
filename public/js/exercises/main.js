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



// const exerciseDisplayAll = document.getElementById('exercise-box')
// if (exerciseDisplayAll.offsetHeight === 0) {
//     ifEmpty.style.display = 'flex'
// } else {
//     ifEmpty.style.display = 'none'
// }







// Handle form Infomration
// const form = document.getElementById('formulary')

// form.addEventListener('submit', async(event) => {
//     event.preventDefault()

//     erxName = form.elements['name'].value
//     exrMainMuscle = form.elements['main-muscle'].value
//     exrClass = form.elements['class'].value

//     const exerciseInfo = {
//         name: erxName,
//         mainMuscle: exrMainMuscle,
//         class: exrClass,
//         isCustom: true
//     }

//     console.log(JSON.stringify(exerciseInfo))
//     sendData(exerciseInfo)
//     form.reset()
// })


// function sendData(data) {
//     fetch('/exercises', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         if (response.ok) {
//             console.log('Datos enviados correctamente');
//             window.location.href = "/exercises";
//         } else {
//             console.error('Error al enviar los datos');
//         }
//     })
//     .catch(error => {
//         console.error('Error al enviar los datos:', error);
//     });
//   }