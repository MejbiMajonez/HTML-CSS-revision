$(document).ready(function(){
p1();
});
function p1(){
  for(i=1;i<=9;i+=2){
    $('#box').append('<br>'+i);
  }
}
