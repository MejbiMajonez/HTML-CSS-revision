$(document).ready(function(){

});
var zmienna_globalna = 0;

function go_function1(){
 var zmienna_lokalna= 0;
 zmienna_globalna++
  console.log('zmienna_globalna: '+zmienna_globalna+',zmienna_lokalna '+zmienna_lokalna);
}
function go_function2(){
  zmienna_lokalna= 7;
  zmienna_globalna++
  console.log('zmienna_globalna: '+zmienna_globalna+',zmienna_lokalna '+zmienna_lokalna);
}
