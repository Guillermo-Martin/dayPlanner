// Targeting elements
var $currentDay = $("#currentDay");
var $container = $(".container");

// Display current day in jumbotron
// Displaying date and time: https://momentjs.com/docs/#/displaying/format/
var now = moment().format("dddd, MMMM Do");
$currentDay.text(now);

checkEvents();

// Array for all hours
var allHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var savedEvents = [
        { hour: "9AM", event: ""},
        { hour: "10AM", event: ""},
        { hour: "11AM", event: ""},
        { hour: "12pm", event: ""},
        { hour: "1pm", event: ""},
        { hour: "2pm", event: ""},
        { hour: "3pm", event: ""},
        { hour: "4pm", event: ""},
        { hour: "5pm", event: ""}
];


// Check for items in local storage
function checkEvents(){
        var storedEvents = JSON.parse(localStorage.getItem("event"));
        console.log(storedEvents[0].hour);
}



for(var i = 0; i < allHours.length; i++){

        // Create p tags and append to container div
        var timeBlock = $('<p>');
        timeBlock.addClass("row hour");
        $container.append(timeBlock);

        // Span
        var hourSpan = $('<span>');
        hourSpan.text(allHours[i]);
        // hourSpan.attr("hour", i);
        timeBlock.append(hourSpan);

        // Textarea
        var textArea = $('<textarea>');
        textArea.attr("hour", i);
        timeBlock.append(textArea);
        // textArea.text("hello!");

        // Save Button    
        // Create save button
        var saveButton = $('<button>');
        saveButton.text("Save");
        saveButton.addClass("saveBtn");
        // Append to timeblock
        timeBlock.append(saveButton);

}




// add event listener to save button
$('.saveBtn').on('click', function(){
        // Get text from textarea
        // .prev():  https://api.jquery.com/prev/
        var eventText = $(this).prev('textarea').val();
        console.log(eventText);

        // get hour of the textarea
        var eventHour = $(this).prev('textarea').attr('hour');
        console.log(eventHour);

        // take text and push into object associated with the hour
        savedEvents[eventHour].event = eventText;
        console.log(savedEvents);

        // save array to local storage
        localStorage.setItem("event", JSON.stringify(savedEvents));

});








// Get all hours of day
// var $container = $(".container");
// var hours = moment().hour();  // this displays current time as a number 0-23
// console.log(hours);