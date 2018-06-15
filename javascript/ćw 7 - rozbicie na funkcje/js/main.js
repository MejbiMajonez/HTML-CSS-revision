$(document).ready(function(){

});
function zmienMnie(){
  wartosc = $('#wartosc').val();
  wartosc2 = zamien_na_hex(wartosc);
  $('#wartosc2').val(wartosc2);
}
function zamien_na_hex(wartosc){
  switch(wartosc){
    case '10': text ='A'; break;
    case '11': text ='B'; break;
    case '12': text ='C'; break;
    case '13': text ='D'; break;
    case '14': text ='E'; break;
    case '15': text ='F'; break;
    default:text = wartosc;

  }
  return text;
}
