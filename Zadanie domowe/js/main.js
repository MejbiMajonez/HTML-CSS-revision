$(document).ready(function () {
  go_kw();

});

function go_kw() {
  move_me();
  human();
  boom();
  color();
  resize();
  framecolor();
}


function move_me() {
  $(document).on('keydown', function (event) {

    let key = event.which;
    let qt = $('#quadrat');

    if(key == 37 && parseInt(qt.css('left')) > 0){
      qt.css('left', '-=1');
    }else if(key == 38 && parseInt(qt.css('top')) > 0){
      qt.css('top', '-=1');
    }else if(key == 39 && parseInt(qt.css('left')) < 788){
      qt.css('left', '+=1');
    }else if(key == 40 && parseInt(qt.css('top')) < 388){
      qt.css('top', '+=1');
    }

  });
}

function human(){
  $(document).on('keydown', function(){
    let key = event.which;

    if(key == 72){
      $('#quadrat').toggleClass('quadrat human');
    }

    let lewo = $('#quadrat').hasClass('human');
    let prawo = $('#quadrat').hasClass('human');


      if(key == 37 && lewo){
          $('#quadrat').addClass('humanl');
          $('#quadrat').removeClass('human');

        }else if(key == 39 && prawo){
          $('#quadrat').addClass('humanr');
          $('#quadrat').removeClass('humanl');

        }
    });
}

function boom(){
  $(document).on('keydown', function(){
    let key = event.which;

    if(key == 32){
      $('#quadrat').addClass('boom');
      $('#quadrat').removeClass('quadrat');

      setTimeout(function(){
        document.getElementById('quadrat').style.top = 180 + 'px';
        document.getElementById('quadrat').style.left = 360 + 'px';
        $('#quadrat').addClass('quadrat');
        $('#quadrat').removeClass('boom');
      },3000);

    }
  });
}

function color(){
  $(document).on('keydown', function(){
    let key = event.which;
    let qt = $('#quadrat');

    if(key == 82){
      qt.css('background-color', '#f00');
    }else if(key == 71){
      qt.css('background-color', '#0f0');
    }else if (key == 66){
      qt.css('background-color', '#00f');
    }
  });
}

function resize(){
  $(document).on('keydown', function(){
    let key = event.which;
    if(key == 67){
      $('#quadrat').toggleClass('quadrat quadratbig');
    }
  });
}

function framecolor(){
  setInterval(function() {
    $("#quadrat").animate({color: "red"}, 2000).
              animate({color: "green"}, 2000).animate({color: "blue"}, 2000);}, 400);
}
