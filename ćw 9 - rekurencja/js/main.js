$(document).ready(function(){
odliczanko(11);
});
function odliczanko(licznik){
  licznik--;
  if(licznik>0){
    $('#box_informacyjny').append(licznik+"<br>");
    setTimeout(function(){
      odliczanko(licznik);
    },1000);
  }else{
    $('box_informacyjny').append("Nowy Rok");
  }
}
