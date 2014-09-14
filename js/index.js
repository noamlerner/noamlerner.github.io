$(document).ready(function() {
    $("#navbar p").mouseenter(function(event) {
        $(this).addClass('highlighted')
    });
    $('#navbar p').mouseleave(function(event) {
        $(this).removeClass('highlighted')
    });
    $(".button").mouseenter(function(event) {
        $(this).addClass('highlighted')
    });
    $('.button').mouseleave(function(event) {
        $(this).removeClass('highlighted')
    });

    $('.nav-button').click(function(event) {
        handleSelected('#' + $(this).attr('id'));
        handleDiv($(this).attr('goto-div'));
    });

    $('#github').mouseenter(function(event) {
        $(this).addClass('highlight-git')
    });
    $('#github').mouseleave(function(event) {
        $(this).removeClass('highlight-git')
    });

    $('.resume-nav p').click(function(event) {
        handleResDiv($(this).attr('goto-div'));
    });
})

var selected = '#home-button';

function handleSelected(current) {
    $(selected).removeClass('selected');
    selected = current;
    $(selected).addClass('selected');
}
var onDiv = "#home";

function handleDiv(current) {
   $(onDiv).slideUp(500);
   onDiv = current;
   $(onDiv).slideDown(500);
}


var onResDiv = "#languages"

function handleResDiv(current) {
    console.log('gah');
    $(onResDiv).fadeOut(500, function() {
        onResDiv = current;
        $(onResDiv).fadeIn(500);
    });
}
function fadeAnim(current){
    $(onDiv).fadeOut(500,function(){
        onDiv = current;
        $(onDiv).fadeIn(500);
        console.log('fade');
    });
}
function slideAnim(current){
    $(onDiv).slideUp(500);
   onDiv = current;
   $(onDiv).slideDown(500);
   console.log('slide');
}
