$(document).ready(function() {


var tasks = [];

// time display/validation 
var time = document.getElementById("currentDay");
function currentDay() {
    time.textContent = new Date().toString();
}

// setting a refresh for every second
setInterval(currentDay, 1000);

// add text content of the current date 
function checkTime() {
  // get date from task element
    var clockEl = moment().hours();
    $(".event-time").each(function () {
        var hourRow = parseInt($(this).attr("data-hour"));

        if (hourRow < clockEl) {
            $(this).addClass("past");
        } else if (hourRow = clockEl) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }else if (hourRow > clockEl) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

setInterval(checkTime, 1000);

// create the tasks 
function createTasks(tasksText) {
    var tasksText = $("text-area").text(textInput);
    tasksText.append(tasksText);
}

// load all the tasks 
// var loadTasks = function() {
//     tasks = localStorage.getItem("tasks")
// }

// save the tasks
// function saveTasks() {
//     $(".event-time").html(localStorage.text)
// };

// edit cards
// $(".event-time").on("click", function() {
//     var text = $(".description").val();
//     var dataHour = $("#data-hour").val();
//     localStorage.text = data
// });

// when save button is clicked 
$(".saveBtn").on("click",function() {
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(hour, text);
    console.log(text);
    // saveTasks();
});

// loadTasks(); 



$("#9 .description").val(localStorage.getItem("9"));

})