const inputBox = document.getElementById("input-box");
const checked = document.getElementById("checked");

function addTask(){
  if (inputBox.value  === ''){
  console.log("Updating list....");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    checked.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
const mark = document.getElementsByClassName("mark");
  checked.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("mark");
      saveData();
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
}, false);
function saveData(){
localStorage.setItem("data", checked.innerHTML);
}
function showTask(){
  checked.innerHTML = localStorage.getItem("data");
}
showTask();



















