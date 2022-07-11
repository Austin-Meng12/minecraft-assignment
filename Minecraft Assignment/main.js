// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById("fish-btn");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let resetBtn = document.getElementById("reset-btn");
//probability of fish 
let probabilityCod = document.getElementById("fishCod");
let probabilitySalmon = document.getElementById("fishSalmon");
let probabilityTropical = document.getElementById("fishTropical");

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener("click", fishBtnClicked);
resetBtn.addEventListener("click", resetBtnClicked);
//fucntion catchFish
function catchFish(probabilityCod,probabilitySalmon ,probabilityTropical) {
  let randNum = Math.random();
  if (randNum < probabilityCod ) {
    numCod++;
    numCodSpan.innerHTML = numCod;
    resultImg.src = "img/Raw-Cod.png";
  } else if (randNum < probabilitySalmon ) {
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
    resultImg.src = "img/Raw-Salmon.png";
  } else if (randNum < probabilityTropical) {
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    resultImg.src = "img/Tropical-Fish.png";
  } else {
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    resultImg.src = "img/Pufferfish.png";
  }
  
}
// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;
 
  // Catch fish based on character
  if (character === "steve") {
    let probabilityCod = 0.7
    let probabilitySalmon = 0.9
    let probabilityTropical = 0.95
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    catchFish(probabilityCod, probabilitySalmon, probabilityTropical);
  } else if (character === "alex") {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    let probabilityCod = 0.1
    let probabilitySalmon = 0.3
    let probabilityTropical = 0.5
    catchFish(probabilityCod, probabilitySalmon, probabilityTropical);
  } else if (character ==="villager") {
    let probabilityCod = 0.25
    let probabilitySalmon = 0.5
    let probabilityTropical = 0.75
    catchFish(probabilityCod, probabilitySalmon, probabilityTropical);

  }

} 


// Event handler for resetBtn
function resetBtnClicked() {
  numCod = 0;
  numSalmon = 0;
  numTropical = 0;
  numPuffer = 0;

  numCodSpan.innerHTML = numCod;
  numSalmonSpan.innerHTML = numSalmon;
  numTropicalSpan.innerHTML = numTropical;
  numPufferSpan.innerHTML = numPuffer;
}


