



const user = {
    name: "fabrizio411",
    join_date: new Date(),
    level: 0,
    exp: 286,


    // WORKOUTS
    workouts: 25,
    // WEEK STREAK
    week_streak: 3,


    //WEIGHT
    weight: [76.5, 77.1, 77, 76.9, 77.2, 76.8, 75],
    best_weight: undefined,
    weight_goal: "GAIN",


    // EXERCISES
    best_exercise: undefined, 

    exercises: {
        // PulUps
        pullup: {
            "name": "PullUp",
            "total": 350,
            max: 15,
            heaviest: 0
        },
    
        // Dips
        dip: {
            "name": "Dips",
            "total": 425,
            max: 30,
            heaviest: 15
        },
    
        // Pushups
        pushup: {
            "name": "PushUp",
            "total": 210,
            max: 25,
            heaviest: 0
        },
    
        // Muscle Ups
        muscleup: {
            "name": "MuscleUp",
            "total": 0,
            max: 0,
            heaviest: 0
        },
    
        //Squats
        squat: {
            "name": "Squat",
            "total": 563,
            max: 50,
            heaviest: 80
        },
    
        // Pistols
        pistol_squat: {
            "name": "Pistol Squat",
            "total": 48,
            max: 8,
            heaviest: 0
        }
    }
}   



// SET BEST WEIGHT
let weight_array = user.weight;
let best_w = 0;
if (user.weight_goal === "GAIN") {
    weight_array.forEach(element => {
        if (element > best_w) best_w = element;
    })
} else if(user.weight_goal === "LOOSE") {
    best_w = weight_array[0]
    weight_array.forEach(element => {
        if (element < best_w) best_w = element;
    })
}


user.best_weight = best_w;


// SET BEST EXERCISE
let exercises = user.exercises;
let reference = 0;
let best_ex;
for (let element in exercises) {
    let element_object = exercises[element];

    if (element_object["total"] > reference) {
        reference = element_object["total"];
        best_ex = element_object;
    }
}
user.best_exercise = best_ex;
