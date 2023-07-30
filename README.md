# TODOS
- Evaluar necesidad de un id en parametros de updateProgram
- Al crear un ejercicio, crear un record del mismo
- weightGoal 
- Usuario tiene que poder manejar las fechas de los datos



## Dev
- [Crear ejercicios default](#createexercisedev)

# Base de datos:
## User:
- Registro de usuarios
- Validacion de datos enviados con libreria Zod
- Cifrado de contraceña con bCrypt
- Se guarda un timestamp
- Tambien se va a guardar el total de entrenamientos y el goal del peso corporal ("workouts", "weightGoal")
- Al crearse un usuario tambien se crearan las sigientes colecciones:
    - Un Program vacio del usuario
    - Un Record del usuario para cada ejercicio default

## Program
- Registro unico por usuario
- Se guardaran los datos del programa semanal de rutinas (refereiciadas con ObjectId) elejidas por el usuario

## Routine
- Rutinas de cada usuario.
- Los ejercicios de la rutina seran referenciados como ObjectId
- Se llevara un contador de las veces que la rutina fue realizada

## Workout
- Se registraran los entrenamientos
- Contiene un array con ObjectId de los RecodHistory correspondientes a ese entrenamiento
- Comodidad para luego mostrar el entrenamiento
- Implementado de esta manera para realizar la edicion de un entrenamiento. La id del parametro sera la del mismo

## RecordHistory
- Esta coleccion guardara los registros de cada ejercicio realizado en un entrenamiento de forma individual
- Se hara referencia al ejercicio al que pertenecen con ObjectId
- Se guardara un timestamp luego poder agrupar los datos de un mismo entrenamiento
- Se guardara el orden en que se enviaron los ejercicios para mostrarlos correctamente

## Measure
- Registro de medidas de peso corporal
- Se podra elejir el objetivo personal (ganar o perder peso)
- Se guardara un timestamp para poder ordenar los datos al mostrarlos



# Schemas:
## Validations
### registerSchema
- Validacion de datos recibidos con libreria Zod
- Valida username, email y password. Que cumplan con las condiciones planteadas
- Manda mensages de error en caso de haberlos
### loginSchema
- Validacion de datos recibidos con libreria Zod
- Valida username y password. Que cumplan con las condiciones planteadas
- Manda mensages de error en caso de haberlos



# Funciones:
## Config
### connectDB
- Coneccion con base de datos.

## Middlewares
### authRequired
- Obtiene el valor del token de la cookie y la valida usando libreria JsonWebToken
- Asigna el usuario asociado al token a req.user
### validateSchema
- Funcion usada para comparar los datos recibidos con un schema de datos de Zod
- Parametro: schema de zod a comparar

## Controllers
### register
- Cifrar contraceña
- Crear registro del usuario en DB
- Crear token asociado al usuaio (libreria JsonWebToken) y mandarlo como cookie
- Crear un documento de Record para cada ejercicio registrado en DB asociados con el usuario
- Crear un docuemtno de Program asociado con el usuario
- [Estructura de datos](#register---estructura)
### login
- Buscar el usuario en la base de datos con el usarname, ya que este es unico
- Si el usuario existe, comaprar la contraceña encriptada (libreria BCrypt)
- Crear el token asociado al usuario y mandarlo como cookie
- [Estructura de datos](#login---estructura)
### logout 
- Borrar la cookie asociado con el usuario. Por lo que no cumplira la validacion
### createExerciseDEV
- Crear ejercicios default (atributo isCusto = false)
- Facilita la creacion, no hay que hacerlo manualmente
- [Estructura de datos](#createExerciseDEV---estructura)
### getExercise
- Junta en un array todos los ejercicios default y los ejercicios cusom del usuario
### createExercise
- Crear ejercicios custom del usuario
- [Estructura de datos](#createExercise---estructura)
### deleteExercise
- Eliminar ejercicios custom del usuario
### getMeasures
- Junta todos los registros de medidas del usuario
### createMeasure
- Cerear un nuevo docuemnto Measure asociado con el usuario
- [Estructura de datos](#createMeasure---estructura)
### updateMeasure
- Actualizar el dato de la medida
### deleteMeasure
- Eliminar registro de medida de el usuario
### getProgram
- Se obtiene un objeto con cada obeto de la rutina dividido segun el dia que le corresponde. Las rutinas se obtienen con el ID guardado.
### updateProgram
- Se actualiza el valor de week.
- [Estructura de datos](#updateProgram---estructura)
### getRoutines
- Junta todas las rutinas asociadas con el usuario
### getOneRoutine
- Se obtiene los datos de una rutina en especifico
### createRoutine
- Crear una nueva rutina asociada con el usuario
- [Estructura de datos](#createroutineupdateroutine---estructura)
### updateRoutine 
- Actualizar los datos de una rutina asociada con el usuairo
- [Estructura de datos](#createroutineupdateroutine---estructura)
### deleteRoutine
- Eliminar un documento de Routine asociado con el usuario
### getRecord
- Obtener los docuemntos Record de todos los ejercicios asociados con el usuario
### createRecord
- Crear un nuevo documento ReocrdHistory
- Checkear de que los datos numericos sean numeros, en caso contrario se transforman en 0
- Actualizacion del contador de workouts en docuemnto User
- Para cada ejercicio del regisstro se crea un RecordHistory del mismo, asociado asociado con el usuario, y con una variable que registra el orden de los ejercicios
- Se crea un documento Workout con las Id de todos los RecordHystory del entrenamiento, tambien se guarda timestamp
- [Estructura de datos](#createRecord---estructura)
### updateRecord
- Actualizar los datos de un Workout
- A partir del workout se busna los RecordHistory asociados y se actualizan
- Actualiazr los Id de ejercicios guardados en Workout
- [Estructura de datos](#createrecordupdaterecord---estructura)
### deleteRecord
- Borrar un documento Workout y los History asociados
- Actualizar el contador de workouts en User
### getHistory
- Se obtiene un objeto workout ordenado por fecha
- Este objeto en records, en lugar de Id's de historys va a tener un objeto con datos del ejercicio y del History asociado

## Helpers
### createAccesToken
- Crea un token con libreria JsonwebToken

# Requests
## Estructuras de datos
### register - Estructura
`
{
    username: '',
    email: '',
    password: ''
}
`
- [Back to doc](#register)

### login - Estructura
`
{
    username: '',
    password: ''
}
`
- [Back to doc](#login)

### createExerciseDEV - Estructura
`
{
    name: '',
    type: '',
    muscle: ''
}
`
- [Back to doc](#createExerciseDEV)

### createExercise - Estructura
`
{
    name: '',
    type: '',
    muscle: ''
}
`
- [Back to doc](#createExercise)

### createMeasure - Estructura
`
{
    data: 75
}
`
- [Back to doc](#createMeasure)

### updateProgram - Estructura
`
{
    week: [[], [], [], [], [], [], []]
}
`
- [Back to doc](#updateProgram)

### createRoutine/updateRoutine - Estructura
`
{
    name: '',
    exercises: [
        {
            // COMPLETAR
        }, 
        {}
    ]
}
`
- [Back to doc](#createRoutine)

### createRecord/updateRecord - Estructura
`
{
    "exercise": ['', '', ''],
    "mainData": [[], [], []],
    "secondaryData": [[], [], []]
}
`
- [Back to doc](#createRecord)
