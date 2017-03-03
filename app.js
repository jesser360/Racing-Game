console.log("racelife");
$(document).ready(function(){
var $board =$('#board')
var $p1 = $('#p1');
var $p2 = $('#p2');
var $lane1 = $('#lane1');
var $lane2 = $('#lane2');

function Racer(isWinner){
  this.isWinner = isWinner || false;
}
var racer1 = new Racer()
var racer2 = new Racer()

function moveObama(){
  $(document).bind('keydown',function(el){
    left = 37;
    up = 38;
    right = 39;
    down = 40;
    if (el.keyCode == left){
    $('#p1').animate({left: "-=50px"})
  } else if (el.keyCode == up){
      $('#p1').animate({top: "-=50px"})
   }else if (el.keyCode == right){
      $('#p1').animate({left: "+=50px"})
  } else if (el.keyCode == down){
      $('#p1').animate({top: "+=50px"})
  }
  $(document).bind('keyup',function(){
    $('#p1').stop();
  })
  });
};

function moveTrump(){
  $(document).bind('keydown',function(el){
    a = 65;
    w = 87;
    d = 68;
    s = 83;
    if (el.keyCode == a){
    $('#p2').animate({left: "-=50px"})
  } else if (el.keyCode == w){
      $('#p2').animate({top: "-=50px"})
   }else if (el.keyCode == d){
      $('#p2').animate({left: "+=50px"})
  } else if (el.keyCode == s){
      $('#p2').animate({top: "+=50px"})
  }
  $(document).bind('keyup',function(){
    $('#p2').stop();
  })
  });
};
var count = 4;
function timer(){
  if(count > 0){
    $('#countDown').append(count);
    count--;
    setTimeout(timer,1000);
  } else {
    $('#countDown').append("GO!")
  }
}
$('#start').on('click',function(){
  timer();
})
//$p1.addClass('obama');
//$p2.addClass('trump');
// var obamaFace = new Image();
// obamaFace.src = 'pics/obamaface.png';
//
// var trumpFace = new Image();
// trumpFace.src = 'pics/trumpface.jpg';
//
// $('lanes1').append($p1);
// $('lane2').append($p2);


moveObama();
moveTrump();
});
