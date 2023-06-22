



const user = {
    name: "fabrizio411",
    level: 0,
    exp: 286,


    // WORKOUTS
    workouts: 20,
    // WEEK STREAK
    week_streak: 3,


    //WEIGHT
    best_weight: 75,
    weight_goal: "GAIN",


    // EXERCISES
    best_exercise: undefined, 

    exercises: {
        // PulUps
        pullup: {
            name: "PullUp",
            "total": 350,
            max: 15,
            heaviest: 0
        },
    
        // Dips
        dip: {
            name: "Dips",
            "total": 425,
            max: 30,
            heaviest: 15
        },
    
        // Pushups
        pushup: {
            name: "PushUp",
            "total": 210,
            max: 25,
            heaviest: 0
        },
    
        // Muscle Ups
        muscleup: {
            name: "MuscleUp",
            "total": 0,
            max: 0,
            heaviest: 0
        },
    
        //Squats
        squat: {
            name: "Squat",
            "total": 563,
            max: 50,
            heaviest: 80
        },
    
        // Pistols
        pistol_squat: {
            name: "Pistol Squat",
            "total": 48,
            max: 8,
            heaviest: 0
        }
    }
}   




let exercises = user.exercises;
let reference = 0;
let best_ex;

for (let element in exercises) {
    let element_object = exercises[element]

    if (element_object["total"] > reference) {
        reference = element_object["total"];
        best_ex = element_object
    }
}

user.best_exercise = best_ex

console.log(user.best_exercise)