const enddate = "19 march 2025 3:37 am"

document.querySelector("#end-date").innerText = enddate;

const input = document.querySelectorAll("input");



function clock(){
  const end = new Date(enddate);
  const now = new Date()
  // console.log(end, now);
  const diff = (end-now) / 1000;
  if(diff<0){
    return;
  }
  // console.log(diff);
  input[0].value = Math.floor(diff/3600/24);     // days
  input[1].value = Math.floor(diff/3600) % 24;   // hour
  input[2].value = Math.floor(diff/60) % 60;     // second
  input[3].value = Math.floor(diff) % 60;
  
}
clock();

// 1 days = 24 hous
// 1 hr = 60 min 
// 60 min = 3600 sec
setInterval(
  () => {
    clock()
  },1000)
