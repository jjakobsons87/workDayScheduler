
// time display/validation 
var date = document.getElementById("currentDay");
function currentDay() {
    time.textContent = new Date().toString();
}

// setting a refresh for every second
setInterval(currentDay, 1000);

// add text content of the current date 
function checkTime() {
  // get date from task element
    var clockEl = moment().date();
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

// load all the tasks 
var loadTasks = function() {
    for (let tasks = 9; count < 18; count++) {
        localStorage.getItem(tasks);
        let myString = localStorage.getItem(tasks);
        if (myString) {
            $("#" + count).val(myString);
        }
    }
}

// save the tasks
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify());
};


// save button is clicked in the task field 
$("#saveBtn .btn").on("click", function() {
    var text = $(this).siblings("description").val();
    localStorage.setItem($(this).parent().attr("data-hour"), text);
    loadTasks();
});

loadTasks(); 