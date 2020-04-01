// Targeting elements
var $currentDay = $("#currentDay");
var $container = $(".container");

// Display current day in jumbotron
// Displaying date and time: https://momentjs.com/docs/#/displaying/format/
var now = moment().format("dddd, MMMM Do");
$currentDay.text(now);

// check current hour
var currentHour = moment().hour();

// Array for all hours
var allHours = [
        { hour: 9, label: "9AM"}, 
        { hour: 10, label: "10AM"}, 
        { hour: 11, label: "11AM"}, 
        { hour: 12, label: "12PM"}, 
        { hour: 13, label: "1PM"}, 
        { hour: 14, label: "2PM"}, 
        { hour: 15, label: "3PM"},
        { hour: 16, label: "4PM"}, 
        { hour: 17, label: "5PM"}
];  
        

// Check if there's anything in local storage
var savedEvents = JSON.parse(localStorage.getItem("event"));

if(savedEvents === null){
        savedEvents = [
                { hour: 9, event: ""},
                { hour: 10, event: ""},
                { hour: 11, event: ""},
                { hour: 12, event: ""},
                { hour: 13, event: ""},
                { hour: 14, event: ""},
                { hour: 15, event: ""},
                { hour: 16, event: ""},
                { hour: 17, event: ""}
        ];
}


for(var i = 0; i < allHours.length; i++){

        var hour = allHours[i].hour;
        var label = allHours[i].label;
        var event = savedEvents[i].event;

        // Create p tags and append to container div
        var timeBlock = $('<p>');
        timeBlock.addClass("row hour");
        $container.append(timeBlock);

        // Span
        var hourSpan = $('<span>');
        hourSpan.text(allHours[i].label);
        timeBlock.append(hourSpan);

        // Textarea
        var textArea = $('<textarea>');
        textArea.attr("hour", allHours[i].hour);
        textArea.attr("index", i);
        timeBlock.append(textArea);
        textArea.text(savedEvents[i].event);

        // Compare hours
        if(currentHour > hour){
                textArea.addClass("past");
        } else if(currentHour < hour){
                textArea.addClass("future");
        } else {
                textArea.addClass("present");
        }

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

        // get index of the textarea 
        var eventIndex = $(this).prev('textarea').attr('index');

        // take text and push into object associated with the hour
        savedEvents[eventIndex].event = eventText;

        // save array to local storage
        localStorage.setItem("event", JSON.stringify(savedEvents));
});