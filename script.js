let year = document.getElementById("year");
let month = document.getElementById("month");
let date = document.getElementById("date");
// 
function calculate(){
let DD = day.value;
let MM = month.value;
let CC = year.value.slice(0, 2);
let YY = year.value.substring(2);

Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
}