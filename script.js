function calculate(){
  let longDate = document.getElementById("date").value
  let year = longDate.substring(0,4)
  let month = longDate.substring(5,7)
  let date = longDate.substring(8,10)
  

let DD = parseInt(date)
let MM = parseInt(month)
let CC = parseInt(year.substring(0,2))
let YY = parseInt(year.substring(2,4));

let d = Math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
return d
}
// 
function picked(){
let gender = document.querySelector('input[name="Male-Female"]:checked').value;
let index = calculate();
let male =["Kwasi", "Kwadwo", "Kwabena", "kwaku", "Yaw", "Kofi", "Kwake"];
let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// 
// 
let Akan
let day
if (gender.value == "male"){
  Akan = male[index]
  day = weekdays[index]
  alert("You were born on " + day + ". Your Akan name is " + Akan)
} else{
  Akan = female[index]
  day = weekdays[index]
  alert("You were born on " + day + ". Your Akan name is " + Akan)
}
} 