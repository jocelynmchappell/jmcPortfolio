//script.js

//Click the GO button
$('#go').click(function(){

    //build a function that checks to see if car has won race
    function checkIfComplete() {
        if(isComplete == false) {
            isComplete = true;
        } else {
            place = 'second';
        }

    }

    //get the width of the cars to prevent cars ending at back instead of front of image
    var carWidth = $('#horse1').width();

    //width of racetrack
    var raceTrackWidth = $(window).width() - carWidth;

    //gen a random # between 1 and 5000
    var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
    var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );

    //set a flag variable to FALSE by default 
    var isComplete = false;

    //set a flag variable to FIRST by default
    var place = 'first';

    //animate car 1
    $('#horse1').animate({

        //move car width of race track
        left: raceTrackWidth

    }, raceTime1, function() {

        //animation complete, run function if car is completed race
        checkIfComplete() ;

        //give some text feedback in race info box
        $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' miliseconds!' );
    });

    //animate car 2
    $('#horse2').animate({

        //move car width of race track
        left: raceTrackWidth

    }, raceTime2, function() {

        //animation complete, run function if car is completed race
        checkIfComplete() ;

        //give some text feedback in race info box
        $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' miliseconds!' );
    }); 

});

//reset the game
$('#reset').click(function() {
    $('.horse').css('left','0');
    $('.raceInfo span').text('');
}

)