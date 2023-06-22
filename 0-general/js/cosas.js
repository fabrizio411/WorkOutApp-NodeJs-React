// LEVEL MANAGEMENT
const userLevel = document.getElementById("user-level");
const userExp = document.getElementById("user-exp");
const levelBarStatus = document.getElementById("level-bar-status");
const levelBarFill = document.getElementById("level-bar-fill");

// WORKOUTS
const workoutsTotal = document.getElementById("workouts-total");

// EXERCISES STATS 
// Pullups
const pullupsTotal = document.getElementById("pullups-total");
const pullupsMax = document.getElementById("pullups-max");
const pullupsHeaviest = document.getElementById("pullups-heaviest");
const pullupsIsHeaviest = document.getElementById("pullups-isHeaviest");
const pullupsIsData = document.getElementById("pullups-isData");

// Dips
const dipsTotal = document.getElementById("dips-total");
const dipsMax = document.getElementById("dips-max");
const dipsHeaviest = document.getElementById("dips-heaviest");
const dipsIsHeaviest = document.getElementById("dips-isHeaviest");
const dipsIsData = document.getElementById("dips-isData");

// Pushups
const pushupsTotal = document.getElementById("pushups-total");
const pushupsMax = document.getElementById("pushups-max");
const pushupsHeaviest = document.getElementById("pushups-heaviest");
const pushupsIsHeaviest = document.getElementById("pushups-isHeaviest");
const pushupsIsData = document.getElementById("pushups-isData");

// Muscle Ups
const muscleupsTotal = document.getElementById("muscleups-total");
const muscleupsMax = document.getElementById("muscleups-max");
const muscleupsHeaviest = document.getElementById("muscleups-heaviest");
const muscleupsIsHeaviest = document.getElementById("muscleups-isHeaviest");
const muscleupsIsData = document.getElementById("muscleups-isData");

// Squats
const squatsTotal = document.getElementById("squats-total");
const squatsMax = document.getElementById("squats-max");
const squatsHeaviest = document.getElementById("squats-heaviest");
const squatsIsHeaviest = document.getElementById("squats-isHeaviest");
const squatsIsData = document.getElementById("squats-isData");

// Pistols
const pistolsTotal = document.getElementById("pistols-total");
const pistolsMax = document.getElementById("pistols-max");
const pistolsHeaviest = document.getElementById("pistols-heaviest");
const pistolsIsHeaviest = document.getElementById("pistols-isHeaviest");
const pistolsIsData = document.getElementById("pistols-isData");





function totalNumberDisplay(total_num, who) {
    if (total_num === 0) who.innerHTML = 0;
    else {
        let num = 0;
        let increment_num = total_num / 200;  // Se termina en 3 segundos
        let timeoutID;
    
        // if (total_num < 100) increment_num = 0.3
        // else if (250 < total_num && total_num <= 500) increment_num = 2;
        // else if (500 < total_num && total_num <= 750) increment_num = 3;
        // else if (750 < total_num && total_num <= 1000) increment_num = 4;
        // else if (1000 < total_num && total_num <= 1500) increment_num = 6;
        // else if (1500 < total_num && total_num <= 2500) increment_num = 8;
        // else if (2500 < total_num && total_num <= 4000) increment_num = 10;
        // else if (4000 < total_num && total_num <= 15000) increment_num = 20;
        // else if ( 15000 < total_num) increment_num = 50;
    
        function aumentarNumero() {
            num += increment_num;
    
            who.innerHTML = Math.floor(num).toString();
    
            if (num >= total_num) {
                clearTimeout(timeoutID);
                return;
            }
    
            timeoutID = setTimeout(aumentarNumero, 1);
        }
        aumentarNumero();
    }
}








// EJEMPLO PARA FUTURO
if (userExp !== null) { // Indicator that we are in profile page, not home
    let exercisesArray = [
        pushupsTotal, pushupsMax, pushupsHeaviest, pushupsIsHeaviest, pushupsIsData,
        muscleupsTotal, muscleupsMax, muscleupsHeaviest, muscleupsIsHeaviest, muscleupsIsData,
        squatsTotal, squatsMax, squatsHeaviest, squatsIsHeaviest, squatsIsData,
        pistolsTotal, pistolsMax, pistolsHeaviest, pistolsIsHeaviest, pistolsIsData
    ];

    let dataArray = [
        user.pushups, user.pushups_max, user.pushups_heaviest, null, null,
        user.muscleups, user.muscleups_max, user.muscleups_heaviest, null, null,
        user.squats, user.squats_max, user.squats_heaviest, null, null,
        user.pistols, user.pistols_max, user.pistols_heaviest, null, null
    ];


    for (let i = 0; i < exercisesArray.length; i += 5) {
        exercisesArray[i].innerHTML = dataArray[i];

        if (dataArray[i] === 0) {
            exercisesArray[i + 4].innerHTML = '';
        } else {
            exercisesArray[i + 1].innerHTML = dataArray[i + 1];
            if (dataArray[i + 2] === 0) {
                exercisesArray[i + 3].innerHTML = '';
            } else {
                exercisesArray[i + 2].innerHTML = dataArray[i + 2];
            }
        }
    }
}