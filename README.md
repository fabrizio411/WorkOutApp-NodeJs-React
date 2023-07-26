# TODOS
- Evaluar necesidad de un id en parametros de updateProgram
- Al crear un ejercicio, crear un record del mismo

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
s
## Record
- Cada usuario tendra un Record por cada ejercicio existente
- Al crear ejercicios se creara un Record correspondiente
- Referencia al ejercicio con ObjectId
- Contendra los sigientes datos para los registros pricipales y secundarios del ejercicio:
    - Total: suma de todos los datos registrados
    - Max: maximo de todos los datos registrados. Se guardaran los primeros 3 para tener contingencia en caso de edicion del RecordHistory
    - Average: promedio de todos los datos registrados
    - AverageCounter: llevara la cuenta de cuantos datos hay registrados para calculos de promedio

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

### login - Estructura
`
{
    username: '',
    password: ''
}
`

### createExerciseDEV - Estructura
`
{
    name: '',
    type: '',
    muscle: ''
}
`

### createExercise - Estructura
`
{
    name: '',
    type: '',
    muscle: ''
}
`

