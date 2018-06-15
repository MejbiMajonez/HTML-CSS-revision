$(document).ready(function () {

});
var delay = (function(){
var timer = 0;
return function(callback, ms){
clearTimeout (timer);
timer = setTimeout(callback, ms);
 };
});


$(document).on('keypress',function(e){
if(e.which==37){
$('div').addClass('minicircle');
 }

$(document).keyup(function() {
delay(function(){
$('div').removeClass('minicircle');
 }, 500 );
});

});
