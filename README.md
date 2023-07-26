# TODOS



# INSTALL
Backend:
- npm i
- npm run dev


# DOCUMENTACION

## Base de datos:
### User:
- Registro de usuarios
- Validacion de datos enviados con libreria Zod
- Cifrado de contraceña con bCrypt
- Se guarda un timestamp
- Tambien se va a guardar el total de entrenamientos y el goal del peso corporal ("workouts", "weightGoal")
- Al crearse un usuario tambien se crearan las sigientes colecciones:
    - Un Program vacio del usuario
    - Un Record del usuario para cada ejercicio default

### Program
- Registro unico por usuario
- Se guardaran los datos del programa semanal de rutinas (refereiciadas con ObjectId) elejidas por el usuario

### Routine
- Rutinas de cada usuario.
- Los ejercicios de la rutina seran referenciados como ObjectId
- Se llevara un contador de las veces que la rutina fue realizada

### Workout
- Se registraran los entrenamientos
- Contiene un array con ObjectId de los RecodHistory correspondientes a ese entrenamiento
- Comodidad para luego mostrar el entrenamiento
- Implementado de esta manera para realizar la edicion de un entrenamiento. La id del parametro sera la del mismo

### RecordHistory
- Esta coleccion guardara los registros de cada ejercicio realizado en un entrenamiento de forma individual
- Se hara referencia al ejercicio al que pertenecen con ObjectId
- Se guardara un timestamp luego poder agrupar los datos de un mismo entrenamiento
- Se guardara el orden en que se enviaron los ejercicios para mostrarlos correctamente
s
### Record
- Cada usuario tendra un Record por cada ejercicio existente
- Al crear ejercicios se creara un Record correspondiente
- Referencia al ejercicio con ObjectId
- Contendra los sigientes datos para los registros pricipales y secundarios del ejercicio:
    - Total: suma de todos los datos registrados
    - Max: maximo de todos los datos registrados. Se guardaran los primeros 3 para tener contingencia en caso de edicion del RecordHistory
    - Average: promedio de todos los datos registrados
    - AverageCounter: llevara la cuenta de cuantos datos hay registrados para calculos de promedio

### Measure
- Registro de medidas de peso corporal
- Se podra elejir el objetivo personal (ganar o perder peso)
- Se guardara un timestamp para poder ordenar los datos al mostrarlos