// LEVEL MANAGEMENT
const userLevel = document.getElementById("user-level");
const levelBarStatus = document.getElementById("level-bar-status");
const levelBarFill = document.getElementById("level-bar-fill");


userLevel.innerHTML = user.level.toString();

let expNeeded = 1000;
let barStatus = Math.floor(user.exp * 100 / expNeeded);
levelBarStatus.innerHTML = barStatus.toString();
levelBarFill.style.width = `${barStatus}%`;


// WORKOUTS
const workoutsTotal = document.getElementById("workouts-total");
workoutsTotal.innerHTML = user.workouts;






// EXERCISES STATS 
// Pullups
const pullupsTotal = document.getElementById("pullups-total");
const pullupsTotal2 = document.getElementById("pullups-total-2"); // Hover Info
const pullupsMax = document.getElementById("pullups-max");
const pullupsHeaviest = document.getElementById("pullups-heaviest");
const pullupsIsHeaviest = document.getElementById("pullups-isHeaviest");
const pullupsIsData = document.getElementById("pullups-isData");
const pullupsDataBox = document.getElementById("pullups-data-box"); // To center in case of no data

pullupsTotal.innerHTML = user.exercises.pullup["total"];
pullupsTotal2.innerHTML = user.exercises.pullup["total"];
pullupsMax.innerHTML = user.exercises.pullup.max;
pullupsHeaviest.innerHTML = user.exercises.pullup.heaviest;
if (user.exercises.pullup.heaviest === 0) pullupsIsHeaviest.innerHTML = '';
if (user.exercises.pullup.total === 0) {
    pullupsIsData.innerHTML = '';
    pullupsDataBox.style.gridTemplateColumns = "1fr";
}

// Dips
const dipsTotal = document.getElementById("dips-total");
const dipsTotal2 = document.getElementById("dips-total-2"); // Hover Info
const dipsMax = document.getElementById("dips-max");
const dipsHeaviest = document.getElementById("dips-heaviest");
const dipsIsHeaviest = document.getElementById("dips-isHeaviest");
const dipsIsData = document.getElementById("dips-isData");
const dipsDataBox = document.getElementById("dips-data-box"); // To center in case of no data


dipsTotal.innerHTML = user.exercises.dip["total"];
dipsTotal2.innerHTML = user.exercises.dip["total"];
dipsMax.innerHTML = user.exercises.dip.max;
dipsHeaviest.innerHTML = user.exercises.dip.heaviest;
if (user.exercises.dip.heaviest === 0) dipsIsHeaviest.innerHTML = '';
if (user.exercises.dip.total === 0) {
    dipsIsData.innerHTML = '';
    dipsDataBox.style.gridTemplateColumns = "1fr";
}