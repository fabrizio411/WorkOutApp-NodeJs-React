// LEVEL MANAGEMENT
const userLevel = document.getElementById("user-level");
const userExp = document.getElementById("user-exp");
const levelBarStatus = document.getElementById("level-bar-status");
const levelBarFill = document.getElementById("level-bar-fill");


userLevel.innerHTML = user.level.toString();
userExp.innerHTML = user.exp.toString();

let expNeeded = 1000;
let barStatus = Math.floor(user.exp * 100 / expNeeded);
levelBarStatus.innerHTML = barStatus.toString();
levelBarFill.style.width = `${barStatus}%`;




// JOIN DATE
const joinDate = document.getElementById("join-date");

let date_day = user.join_date.getDate();
let date_month = user.join_date.getMonth() + 1;
let date_year = user.join_date.getFullYear();

joinDate.innerHTML = `${date_day}/${date_month}/${date_year}`




// INFO MANAGMENT

// WORKOUTS
const workouts = document.getElementById("workouts");
workouts.innerHTML = user.workouts;

// WEEK STREAK
const weekStreak = document.getElementById("week-streak");
weekStreak.innerHTML = user.week_streak;

// BEST WEIGHT
const bestWeight = document.getElementById("best-weight");
const weightContext = document.getElementById("weight-context");
bestWeight.innerHTML = user.best_weight;
if (user.weight_goal === "GAIN") weightContext.innerHTML = "Highest";
else if (user.weight_goal === "LOOSE") weightContext.innerHTML = "Lowest";

// BEST EXERCISE
const exerciseName = document.getElementById("exercise-name");
const exerciseTotal = document.getElementById("exercise-total");
exerciseName.innerHTML = user.best_exercise["name"]
exerciseTotal.innerHTML = user.best_exercise["total"];
