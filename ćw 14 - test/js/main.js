$(document).ready(function(){

});
minitablica = Array('test1','test2');
tablica = Array('Johny','Bruno','Jolka',54,'Teścik',minitablica);
$.each(tablica,function(k,v){
  console.log('Dla klucza '+k+' mamy wartość');
  console.log(tablica[k]);
})
