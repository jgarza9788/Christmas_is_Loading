const myDate = new Date(); 
const xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
const today = Date.parse(myDate) 

const daysToChristmas = Math.round((xmas-today)/(1000*60*60*24)) 



if (daysToChristmas == 0) 
$('#days').text("It's Christmas!! Merry Christmas!");

if (daysToChristmas < 0) 
$('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");

if (daysToChristmas > 0) 
$('#days').text(daysToChristmas+" days to Christmas!");

const CC = document.getElementsByClassName("candy-cane")[0]

CC.style.width = `${((12.0 - daysToChristmas)/12.0)*100.0}%`

// CC.style.width = `${((12.0 - 1.0)/12.0)*100.0}%`
// CC.style.width = `50.0%`

//make snow
const body = document.getElementsByTagName('body')[0];
console.log(body.clientWidth);

snowDrop(200, randomInt(0, 1280));
snow(200, 150);

function snow(num, speed) {
  if (num > 0) {
    setTimeout(function () {
      $('#drop_' + randomInt(1, 250)).addClass('animate');
      num--;
      snow(num, speed);
    }, speed);
  }
};


function snowDrop(num, position) {
  if (num > 0) {
    var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

    $('body').append(drop);
    $('#drop_' + num).css('left', position);
    num--;
    snowDrop(num, randomInt(60, body.clientWidth));
  }
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};