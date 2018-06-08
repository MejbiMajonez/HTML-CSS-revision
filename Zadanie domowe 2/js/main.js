$(document).ready(function () {
  go_kwadracik();

});

function go_kwadracik() {
  grafika();
  rusz_mnie();
  boom();
  takise();
}
//grafika na starcie
function grafika(){
  $('#dupa').addClass("grafika");
  setTimeout(function schowaj(){$(".grafika").fadeOut(3000);},5000);

}
//poruszanie się kwadracika
function rusz_mnie() {
  $(document).on('keydown', function (event) {

    var key = event.which;
    var peniz = $('#kwadrat');

    if(key == 37 && parseInt(peniz.css('left')) > 0){
      peniz.css('left', '-=1');
    }else if(key == 38 && parseInt(peniz.css('top')) > 0){
      peniz.css('top', '-=1');
    }else if(key == 39 && parseInt(peniz.css('left')) < 788){
      peniz.css('left', '+=1');
    }else if(key == 40 && parseInt(peniz.css('top')) < 388){
      peniz.css('top', '+=1');
    }

  });
}
//eksplozja
function boom() {
  $(document).on('keydown', function (event) {

    var key = event.which;
    var kutaz = $('#kwadrat');
    if(key == 32){
  $( "#kwadrat" ).toggle( "explode" );
  $("#kwadrat").fadeIn(3000);
  $("#kwadrat").addClass("kwadracik1");
  $("#kwadrat").removeClass("kwadracik");
};
});
}
//input po wpisaniu Geek pojawia się logo GF
function takise() {
  $(document).on('keydown', function (event) {
    var key = event.which;
    if(key == 80){
    $("#Geek").addClass("cfel2");
    $("#knefel1").addClass("knefel2");
    $("#knefel1").append("GO!");

  }
});
}
function odczyt(){
  fjut = $('#Geek').val();
  if(fjut == "Geek"){
$("#container").addClass("GF");
}else{
  alert('Nie tym razem, Danielu, pisz to Geek!')
}
}
