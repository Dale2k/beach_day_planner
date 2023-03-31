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

// var now = dayjs()
// is essentially the same as calling new Date()
// 24 clock used to compare time periods.
var time = new Date().getHours();

// add class (color of time box) based on time.

if (time > 9) {
  $("#hour9").addClass("past");
} else if (time >= 9 && time < 10) {
  $("#hour9").addClass("present");
} else {
  $("#hour9").addClass("future");
}

console.log(time);
