$(document).ready(function(){
listener_box1();
});
function listener_box1(){
  $('.box').on('click',function(){
    id = $(this).data('id');
    console.log('Kliknięto box numer '+ id);

    $('.box').css('backgroundColor','#fff');
    $(this).css('backgroundColor','#a00');
  })
}
