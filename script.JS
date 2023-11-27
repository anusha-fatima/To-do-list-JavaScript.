var timer = 10;
var score = 0;
var rn = 0;

function increaseScore(){
score += 10;
rn = document.querySelector("#scoreVal").textContent = score;
}
function getNewHit(){
     rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent =  rn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 160; i++) {
    var random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  var stpTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(stpTimer);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var numclick = Number(details.target.textContent);
    if(numclick === rn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
