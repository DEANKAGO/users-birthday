let year = document.getElementById("year");
let month = document.getElementById("month");
let date = document.getElementById("date");
// 
function calculate(){
let DD = day.value;
let MM = month.value;
let CC = year.value.slice(0, 2);
let YY = year.value.substring(2);

let d = Math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
return d.toFixed
}
// 
function picked(){
let gender = document.getElementById("radio");
let index = calculate();
let male =["Kwasi", "Kwadwo", "Kwabena", "kwaku", "Yaw", "Kofi", "Kwake"];
let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];
// 
// 
if (gender.value == "male"){
  let Akan = male[index]
} else{
  let Akan = female[index]
}
} 