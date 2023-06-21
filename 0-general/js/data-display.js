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


// LEVEL MANAGEMENT
userLevel.innerHTML = user.level.toString();
if (userExp !== null) userExp.innerHTML = user.exp.toString();

let expNeeded = 1000;
let barStatus = Math.floor(user.exp * 100 / expNeeded);
levelBarStatus.innerHTML = barStatus.toString();
levelBarFill.style.width = `${barStatus}%`;




function totalNumberDisplay(total_num, who) {
    if (total_num === 0) who.innerHTML = 0;
    else {
        let num = 0;
        let increment_num = 1;
        let timeoutID;
    
        if (total_num < 100) increment_num = 0.3
        else if (250 < total_num && total_num <= 500) increment_num = 2;
        else if (500 < total_num && total_num <= 750) increment_num = 3;
        else if (750 < total_num && total_num <= 1000) increment_num = 4;
        else if (1000 < total_num && total_num <= 1500) increment_num = 6;
        else if (1500 < total_num && total_num <= 2500) increment_num = 8;
        else if (2500 < total_num && total_num <= 4000) increment_num = 10;
        else if (4000 < total_num && total_num <= 15000) increment_num = 20;
        else if ( 15000 < total_num) increment_num = 50;
    
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

// WORKOUTS 
if (userExp === null) totalNumberDisplay(user.workouts, workoutsTotal);



// EXERCISES STATS
// Pullups
if (userExp !== null)  pullupsTotal.innerHTML = user.pullups.toString();
else totalNumberDisplay(user.pullups, pullupsTotal);
pullupsMax.innerHTML = user.pullups_max.toString();
pullupsHeaviest.innerHTML = user.pullups_heaviest.toString();
if (user.pullups_heaviest === 0) pullupsIsHeaviest.innerHTML = '';
if (user.pullups === 0) pullupsIsData.innerHTML = '';

// Dips
if (userExp !== null)  dipsTotal.innerHTML = user.dips.toString();
else totalNumberDisplay(user.dips, dipsTotal);
dipsMax.innerHTML = user.dips_max.toString();
dipsHeaviest.innerHTML = user.dips_heaviest.toString();
if (user.dips_heaviest === 0) dipsIsHeaviest.innerHTML = '';
if (user.dips === 0) dipsIsData.innerHTML = '';



if (userExp !== null) { // Indicator that we are in profile page, not home
    // PushUps
    pushupsTotal.innerHTML = user.pushups.toString();
    pushupsMax.innerHTML = user.pushups_max.toString();
    pushupsHeaviest.innerHTML = user.pushups_heaviest.toString();
    if (user.pushups_heaviest === 0) pushupsIsHeaviest.innerHTML = '';
    if (user.pushups === 0) pushupsIsData.innerHTML = '';

    // Muscle Ups
    muscleupsTotal.innerHTML = user.muscleups.toString();
    muscleupsMax.innerHTML = user.muscleups_max.toString();
    muscleupsHeaviest.innerHTML = user.muscleups_heaviest.toString();
    if (user.muscleups_heaviest === 0) muscleupsIsHeaviest.innerHTML = '';
    if (user.muscleups === 0) muscleupsIsData.innerHTML = '';

    // Squats
    squatsTotal.innerHTML = user.squats.toString();
    squatsMax.innerHTML = user.squats_max.toString();
    squatsHeaviest.innerHTML = user.squats_heaviest.toString();
    if (user.squats_heaviest === 0) squatsIsHeaviest.innerHTML = '';
    if (user.squats === 0) squatsIsData.innerHTML = '';

    // Pistols
    pistolsTotal.innerHTML = user.pistols.toString();
    pistolsMax.innerHTML = user.pistols_max.toString();
    pistolsHeaviest.innerHTML = user.pistols_heaviest.toString();
    if (user.pistols_heaviest === 0) pistolsIsHeaviest.innerHTML = '';
    if (user.pistols === 0) pistolsIsData.innerHTML = '';
}