console.log("racelife");

var count = 4;
var winner = false;
var trumpCount = 1;
var obamaCount = 1;
$(document).ready(function() {
    winner = false;
    var go = false;
    var $board = $('#board')
    var $p1 = $('#p1');
    var $p2 = $('#p2');
    var $lane1 = $('#lane1');
    var $lane2 = $('#lane2');
    $('.obamaMsg').hide();
    $('.trumpMsg').hide();
    $('#p1').css('position', 'absolute');
    $('#p1').css('top', 0);
    $('#p1').css('left', 15);
    $('#p2').css('position', 'absolute');
    $('#p2').css('top', 0);
    $('#p2').css('left', 15);



    function Racer(isWinner) {
        this.isWinner = isWinner || false;
    }
    var racer1 = new Racer(false);
    var racer2 = new Racer(false);

    $('#start').on('click', function() {
        if(winner === false){
          timer();
          counter = 4;
      } else if (winner === true){
        $('.scoreObama').hide();
        $('.scoreTrump').hide();
        $('.obamaMsg').hide();
        $('.trumpMsg').hide();
        $('#p1').css('position', 'absolute');
        $('#p1').css('top', 0);
        $('#p1').css('left', 15);
        $('#p2').css('position', 'absolute');
        $('#p2').css('top', 0);
        $('#p2').css('left', 15);
        $('#p1').show();
        $('#p2').show();
      }
    })
});

function timer() {
    if (count > 0) {
        $('#countDown').append(count + "..");
        count--;
        setTimeout(timer, 1000);
    }
    if (count === 0) {
        $('#countDown').text("GO!");
        go = true;
        moveObama(go);
        moveTrump(go);
    }
}

function moveObama(go) {
    if (go === true) {
        $(document).bind('keydown', function(el) {
            left = 37;
            up = 38;
            right = 39;
            down = 40;
            if (el.keyCode == left) {
                $('#p1').animate({
                    left: "-=250px"
                })
            } else if (el.keyCode == up) {
                $('#p1').animate({
                    top: "-=250px"
                })
            } else if (el.keyCode == right) {
                $('#p1').animate({
                    left: "+=250px"
                })
                winnerObama();
            } else if (el.keyCode == down) {
                $('#p1').animate({
                    top: "+=250px"
                })
            }
            $(document).bind('keyup', function() {
                $('#p1').stop();
            })
        });
    };
}


function moveTrump(go) {
    if (go === true) {
        $(document).bind('keydown', function(el) {
            a = 65;
            w = 87;
            d = 68;
            s = 83;
            if (el.keyCode == a) {
                $('#p2').animate({
                    left: "-=250px"
                })
            } else if (el.keyCode == w) {
                $('#p2').animate({
                    top: "-=250px"
                })
            } else if (el.keyCode == d) {
                $('#p2').animate({
                    left: "+=250px"
                })
                winnerTrump();
            } else if (el.keyCode == s) {
                $('#p2').animate({
                    top: "+=250px"
                })
            }
            $(document).bind('keyup', function() {
                $('#p2').stop();
            })
        });
    };
}

function winnerObama() {
    var x = $('#p1').offset().left;
    var q = $('#p1').offset().top;
    if (x > 1060) {
        $('.obamaMsg').show();
        $('.scoreObama').show()
        $('#p1').stop().hide();
        $('#p2').stop().hide();
        winner = true;
        obamaCount++;
        if(obamaCount > trumpCount){
          if((obamaCount-trumpCount) === 1){
            $('.scoreObama').text("Obama Leads by " + (obamaCount-trumpCount)+ " vote");
          } else{
          $('.scoreObama').text("Obama Leads by " + (obamaCount-trumpCount)+ " votes");
          }
        } else if (obamaCount === trumpCount){
          $('.scoreObama').text("Obama Ties the score!");
        } else if (obamaCount < trumpCount){
          if((trumpCount-obamaCount) === 1){
            $('.scoreObama').text("Obama is trailing by " + (trumpCount-obamaCount)+ " vote");
          } else{
          $('.scoreObama').text("Obama is trailing by " + (trumpCount-obamaCount) + " votes");
          }
      }
   }
   if(x >= 470 && x <= 670 && q <= 220){
     $('#p1').stop();
     console.log("obama Stopped");
   } else if (q >= 245){
     $('#p1').stop();
     console.log('obama stopped');
   }
}

function winnerTrump() {
    var y = $('#p2').offset().left;
    var r = $('#p2').offset().top;
    if (y > 1060) {
        $('.trumpMsg').show();
        $('.scoreTrump').show()
        $('#p1').stop().hide();
        $('#p2').stop().hide();
        winner = true;
        trumpCount++;
        if(trumpCount > obamaCount){
          if((trumpCount-obamaCount) === 1){
            $('.scoreTrump').text("Trump Leads by " + (trumpCount-obamaCount)+ " vote");
          } else{
          $('.scoreTrump').text("Trump Leads by " + (trumpCount-obamaCount)+ " votes");
          }
        } else if (trumpCount === obamaCount){
          $('.scoreTrump').text("Trump Ties the score!");
        } else if (trumpCount < obamaCount){
          if((obamaCount-trumpCount) === 1){
            $('.scoreTrump').text("Trump is trailing by " + (obamaCount-trumpCount)+ " vote");
          } else{
          $('.scoreTrump').text("Trump is trailing by " + (obamaCount-trumpCount) + " votes");
          }
     }
   }
   if(y >= 430 && y <= 655 && r <= 500){
     $('#p2').stop();
     console.log("trump Stopped");
   } else if (r >= 520){
     $('#p2').stop();
     console.log('trump stopped');
    }
}
// function blockObama(){
//   var l = $('#p1').offset().left;
//   var t = $('#p1').offset().top;
//     }
// }
// blockObama();
// function displayWinner(){
//   if(racer1.isWinner === true){
//   } else if(racer2.isWinner === true){
//   }
// }

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
