


function generateNum() {
  var number = Math.floor(Math.random() * 1001);
  var displayedNumber =  document.getElementById("num")
  displayedNumber.innerText = number;
  
  
}