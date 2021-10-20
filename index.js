const display = document.getElementById('clock');

function updateTime() {
    const d = new Date();

    
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let day = weekday[d.getDay()];
    display.innerText=`${day}\n${hour} : ${minutes}`
}


const d = new Date();
var today = d.getDay();
var esp = new Date('0');
var comp = new Date('0');
var hg = new Date('0');
var ap = new Date('1');
var english = new Date('1');
var fil = new Date('2');
var science = new Date('2');
var envi = new Date('3');
var math = new Date('3');
var spanish = new Date('4');
var mapeh = new Date('4');

switch (new Date().getDay()) {
    case 0:
      var element = document.getElementById("noclasseid");
      element.classList.remove("noclasse");    
      break;
    case 1:
      var element = document.getElementById("monid");
      element.classList.remove("mon");    
      break;
    case 2:
      var element = document.getElementById("tueid");
      element.classList.remove("tue");    
      break;
    case 3:
      var element = document.getElementById("wedid");
      element.classList.remove("wed");    
      break;
    case 4:
      var element = document.getElementById("thuid");
      element.classList.remove("thu");    
      break;
    case 5:
      var element = document.getElementById("friid");
      element.classList.remove("fri");    
      break;
    case 6:
      var element = document.getElementById("noclasseid");
      element.classList.remove("noclasse");
      break;
}

//if(esp.getUTCDay() < d.getUTCDay()){
//console.log('yes :DDDD');
//}  


setInterval(updateTime, 1000);