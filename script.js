const counter = document.getElementById("pCounter")
const discreaseBtn = document.getElementById("discreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
let count = 0

increaseBtn.onclick = function(){
  count++;
  counter.textContent = count;
}

discreaseBtn.onclick = function(){
  count--;
  counter.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  counter.textContent = count;
}
