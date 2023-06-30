function toggleCreateForm() {
    document.getElementById('form-create').classList.toggle('active')
}



// Handle form Infomration
const form = document.getElementById('formulary')

form.addEventListener('submit', async(event) => {
    event.preventDefault()

    erxName = form.elements['name'].value
    exrMainMuscle = form.elements['main-muscle'].value
    exrClass = form.elements['class'].value

    const exerciseInfo = {
        name: erxName,
        mainMuscle: exrMainMuscle,
        class: exrClass,
        isCustom: true
    }

    console.log(JSON.stringify(exerciseInfo))
    sendData(exerciseInfo)
    form.reset()
})


function sendData(data) {
    fetch('/exercises', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Datos enviados correctamente');
            window.location.href = "/exercises";
        } else {
            console.error('Error al enviar los datos');
        }
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
  }