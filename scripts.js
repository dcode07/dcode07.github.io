//alert("Hello");
var bgBtn = document.getElementById('bg-btn');
var bgBody = document.getElementById('body-bg');

bgBtn.addEventListener("click", bgChanger);

function bgChanger(){
  bgBody.classList.toggle("dark-mode");
  if(bgBtn.innerHTML === "Switch to Dark Mode"){
      bgBtn.innerHTML = "Switch to Light Mode";
} else {
  bgBtn.innerHTML = "Switch to Dark Mode"
  }
}
