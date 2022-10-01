//! selectors

const year = new Date().getFullYear();
const month = new Date().getMonth();
console.log(month);

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  const dat = document.querySelector(".circle");
  dat.innerHTML = date.toLocaleTimeString();
  //   document.getElementsByClassName("rectangle").innerHTML =
  //     date.toLocaleTimeString();
  //   console.log(date);
}
