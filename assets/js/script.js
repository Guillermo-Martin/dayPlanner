// Targeting elements
var $currentDay = $("#currentDay");
var $container = $(".container");

// Display current day in jumbotron
// Displaying date and time: https://momentjs.com/docs/#/displaying/format/
var now = moment().format("dddd, MMMM Do");
$currentDay.text(now);



// Array for all hours
var allHours = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", 
                "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];

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
        textArea.attr("id", i);
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
        // Target textarea
        // .prev():  https://api.jquery.com/prev/
        var eventText = $(this).prev('textarea').val();
        console.log(eventText);
});








// Get all hours of day
// var $container = $(".container");
// var hours = moment().hour();  // this displays current time as a number 0-23
// console.log(hours);