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
const pullupsMax = document.getElementById("pullups-max");
const pullupsHeaviest = document.getElementById("pullups-heaviest");
const pullupsIsHeaviest = document.getElementById("pullups-isHeaviest");
const pullupsIsData = document.getElementById("pullups-isData");

pullupsTotal.innerHTML = user.exercises.pullup["total"];
pullupsMax.innerHTML = user.exercises.pullup.max;
pullupsHeaviest.innerHTML = user.exercises.pullup.heaviest;
if (user.pullups_heaviest === 0) pullupsIsHeaviest.innerHTML = '';
if (user.pullups === 0) pullupsIsData.innerHTML = '';

// Dips
const dipsTotal = document.getElementById("dips-total");
const dipsMax = document.getElementById("dips-max");
const dipsHeaviest = document.getElementById("dips-heaviest");
const dipsIsHeaviest = document.getElementById("dips-isHeaviest");
const dipsIsData = document.getElementById("dips-isData");

dipsTotal.innerHTML = user.exercises.dip["total"];
dipsMax.innerHTML = user.exercises.dip.max;
dipsHeaviest.innerHTML = user.exercises.dip.heaviest;
if (user.dips_heaviest === 0) dipsIsHeaviest.innerHTML = '';
if (user.dips === 0) dipsIsData.innerHTML = '';