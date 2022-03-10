var tasks = [];

function createTasks(tasksText) {
    var tasksText = $("text-area").text(textInput);
    tasksText.append(tasksText);
}

// load all the tasks 
var loadTasks = function() {
    for (let taskCount = 9; taskCount < 18; taskCount++) {
        localStorage.getItem(taskCount);
        let myString = localStorage.getItem(taskCount);
        if (myString) {
            $("#" + taskCount).val(myString);
        }
    }
}

// save the tasks
var saveTasks = function(clickedButton) {
    tasks[$(clickedButton).parent().attr("data-hour")] = $("data-hour").val();
}

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

// edit cards
$(".event-time").on("click", function() {
    var text = "";
    var textInput = $("<textarea>").val(text);
    textInput.trigger("focus");
});


$(".saveBtn").on("click", function () {
    var text = $(".description").val();
    localStorage.setItem($(".description").parent().attr("data-hour"), text);
    console.log(text);
    loadTasks();
});




loadTasks(); 