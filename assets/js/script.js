// Wrap code interacting with DOM in a call to jQuery to ensure
// the code isn't run until it has finished rendering the html
// elements

$(document).ready(function () {
  var headPara = $("#currentDay");
  var todayDate = dayjs().format("dddd, MMMM D YYYY");
  headPara.text(todayDate);
});

// variables

var input9El = document.querySelector("#hour9");
var input10El = document.querySelector("#hour10");
var input11El = document.querySelector("#hour11");
var input12El = document.querySelector("#hour12");
var input1El = document.querySelector("#hour1");
var input2El = document.querySelector("#hour2");
var input3El = document.querySelector("#hour3");
var input4El = document.querySelector("#hour4");
var input5El = document.querySelector("#hour5");

//9 local storage - button
input9El.value = localStorage.getItem("9amNote");
saveHour9.addEventListener("click", function store9am() {
  localStorage.setItem("9amNote", input9El.value);
});

//10 local storage - button
input10El.value = localStorage.getItem("10amNote");
saveHour10.addEventListener("click", store10am);
function store10am() {
  localStorage.setItem("10amNote", input10El.value);
}

//11 local storage - button
input11El.value = localStorage.getItem("11amNote");
saveHour11.addEventListener("click", store11am);
function store11am() {
  localStorage.setItem("11amNote", input11El.value);
}

///12 local storage - button
input12El.value = localStorage.getItem("12Note");
saveHour12.addEventListener("click", store12pm);
function store12pm() {
  localStorage.setItem("12Note", input12pmEl.value);
}

//1 local storage - button
input1El.value = localStorage.getItem("1pmNote");
saveHour1.addEventListener("click", store1pm);
function store1pm() {
  localStorage.setItem("1pmNote", input1El.value);
}
//2 local storage - button
input2El.value = localStorage.getItem("2pmNote");
saveHour2.addEventListener("click", store2pm);
function store2pm() {
  localStorage.setItem("2pmNote", input2El.value);
}

///3 local storage - button
input3El.value = localStorage.getItem("3pmNote");
saveHour3.addEventListener("click", store3pm);
function store3pm() {
  localStorage.setItem("3pmNote", input3El.value);
}

//4 local storage - button
input4El.value = localStorage.getItem("4pmNote");
saveHour4.addEventListener("click", store4pm);
function store4pm() {
  localStorage.setItem("4pmNote", input4El.value);
}

//5 local storage - button
input5El.value = localStorage.getItem("5pmNote");
saveHour5.addEventListener("click", store5pm);
function store5pm() {
  localStorage.setItem("5pmNote", input5El.value);
}

// var now = dayjs()
// is essentially the same as calling new Date()
// 24 clock used to compare time periods.
var time = new Date().getHours();

// add class based on time comparison

if (time > 9) {
  $("#hour9").addClass("past");
} else if (time >= 9 && time < 10) {
  $("#hour9").addClass("present");
} else {
  $("#hour9").addClass("future");
}

if (time > 10) {
  $("#hour10").addClass("past");
} else if (time >= 10 && time < 11) {
  $("#hour10").addClass("present");
} else {
  $("#hour10").addClass("future");
}

if (time > 11) {
  $("#hour11").addClass("past");
} else if (time >= 11 && time < 12) {
  $("#hour11").addClass("present");
} else {
  $("#hour11").addClass("future");
}

if (time > 12) {
  $("#hour12").addClass("past");
} else if (time >= 12 && time < 13) {
  $("#hour12").addClass("present");
} else {
  $("#hour12").addClass("future");
}

if (time > 13) {
  $("#hour1").addClass("past");
} else if (time >= 13 && time < 14) {
  $("#hour1").addClass("present");
} else {
  $("#hour1").addClass("future");
}

if (time > 14) {
  $("#hour2").addClass("past");
} else if (time >= 14 && time < 15) {
  $("#hour2").addClass("present");
} else {
  $("#hour2").addClass("future");
}

if (time > 15) {
  $("#hour3").addClass("past");
} else if (time >= 15 && time < 16) {
  $("#hour3").addClass("present");
} else {
  $("#hour3").addClass("future");
}

if (time > 16) {
  $("#hour4").addClass("past");
} else if (time >= 16 && time < 17) {
  $("#hour4").addClass("present");
} else {
  $("#hour4").addClass("future");
}

if (time > 17) {
  $("#hour5").addClass("past");
} else if (time >= 17 && time < 18) {
  $("#hour5").addClass("present");
} else {
  $("#hour5").addClass("future");
}
