moment().format()
var scheduleElement = $('#schedule')
var currentDayElement = $('#currentDay')
var schedule9Element = $('#0');
var schedule10Element = $('#1');
var schedule11Element = $('#2');
var schedule12Element = $('#3');
var schedule1Element = $('#4');
var schedule2Element = $('#5');
var schedule3Element = $('#6');
var schedule4Element = $('#7');
var schedule5Element = $('#8');

var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

var myDay = {
    date: moment().format('L'),
    time: ["9AM", '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
    appointment: ['', '', '', '', '', '', '', '', ''],
};
 
var old = JSON.parse(window.localStorage.getItem("Planner"))
if(myDay.date === old.date){
    myDay = old;
}
// window.localStorage.setItem("Planner", JSON.stringify(myDay));
// console.log(window.localStorage.getItem("Planner"))
// console.log(myDay.date)
// var test = JSON.parse(window.localStorage.getItem("Planner"))
// console.log(test.time[0])
// var ban = 3
// console.log(scheduleElement.children('#' + ban).children('input'))

currentDayElement.text(moment().format('dddd, MMMM Do YYYY'))


function loadApptPPF(){
    var hour = moment().hour()-9;
    for (var i = 0; i<myDay.time.length; i++){
        scheduleElement.children('#' + i).children('input').attr('value', myDay.appointment[i]);
        
        if (hour > i){
            scheduleElement.children('#' + i).children('input').attr('class', 'col-9 event common past')
        } else if ( hour === i){
            scheduleElement.children('#' + i).children('input').attr('class', 'col-9 event common present')
        } else {
            scheduleElement.children('#' + i).children('input').attr('class', 'col-9 event common future')
        }


    }
}


scheduleElement.on('click', function(event){
    var element = event.target;
    if(element.matches("button")===true){
        event.preventDefault();
        var index = element.parentElement.getAttribute("id");
        var thing = scheduleElement.children('#' + index).children('input').val()
        myDay.appointment[index] = thing;
        window.localStorage.setItem("Planner", JSON.stringify(myDay));
        console.log(thing)
    }
})

function loadAppointments(){

}





loadApptPPF()

// function createBlocks(){
//     currentDayElement.text(moment().format('dddd, MMMM Do YYYY'))
//     for(var i = 0; i<8; i++){
//         var appointmentBlock = $('<li class="container form row">');
//         var timeBlock = $('<label class="col-2 text-right time common">');
//         var eventBlock = $('<input class="col-8 event common" type="text" placeholder="hi">');
//         var saveBlock = $('<button class="btn col-2 text-center save common">');
//         timeBlock.text(times[i]);
//         timeBlock.attr('id', 'time')
//         eventBlock.text(times[i]);
//         eventBlock.attr('id', 'event')
//         saveBlock.text(times[i]);
//         saveBlock.attr('id', 'save')

//         appointmentBlock.append(timeBlock);
//         appointmentBlock.append(eventBlock);
//         appointmentBlock.append(saveBlock)
        
//         appointmentBlock.attr('id', i)
//         scheduleElement.append(appointmentBlock);
//     }
// }



// createBlocks();
