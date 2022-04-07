
//  hide navbar when scroll / show navbar when scroll up.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Change text h2 span every 3 seconds to another word.
var text = ["design", "build", "fix"];
var counter = 0;
var elem = document.querySelector('h2 span');
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}


// Experience SECTION
$(document).ready(function() {
  $('.btn1, .btn2, .btn3, .btn4, .btn5, .btn6').click(function() {
    $('.btn1, .btn2, .btn3, .btn4, .btn5, .btn6').removeClass('exp-btn2');
    $(this).addClass('exp-btn2');
  });
});


// content hide on click button.
const btn01 = document.querySelector('.btn01');
const btn02 = document.querySelector('.btn02');
const btn03 = document.querySelector('.btn03');
const btn04 = document.querySelector('.btn04');
// 0
const targetDiv0 = document.querySelector('.panel-0');
const targetDiv1 = document.querySelector('.panel-1');
const targetDiv2 = document.querySelector('.panel-2');
const targetDiv3 = document.querySelector('.panel-3');
//

//
btn01.onclick = function() {
    if (targetDiv0.style.display !== 'none') {
      targetDiv0.style.display = 'none';
    } else {
      targetDiv0.style.display = 'block';
      targetDiv1.style.display = 'none';
      targetDiv2.style.display = 'none';
      targetDiv3.style.display = 'none';
    }
}
//
btn02.onclick = function() {
    if (targetDiv1.style.display !== 'none') {
      targetDiv1.style.display = 'none';
    } else {
      targetDiv1.style.display = 'block';
      targetDiv0.style.display = 'none';
      targetDiv2.style.display = 'none';
      targetDiv3.style.display = 'none';
    }
}
//
btn03.onclick = function() {
    if (targetDiv2.style.display !== 'none') {
      targetDiv2.style.display = 'none';
    } else {
      targetDiv2.style.display = 'block';
      targetDiv0.style.display = 'none';
      targetDiv1.style.display = 'none';
      targetDiv3.style.display = 'none';
    }
}
//
btn04.onclick = function() {
    if (targetDiv3.style.display !== 'none') {
      targetDiv3.style.display = 'none';
    } else {
      targetDiv3.style.display = 'block';
      targetDiv0.style.display = 'none';
      targetDiv1.style.display = 'none';
      targetDiv2.style.display = 'none';
    }
}

//fade content in on scroll
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top;
      // + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


// change Light dark mode
// const logo = document.querySelector(".logo-img[href^="JM-Signature"]");

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector(".logo-img").src="images/jmsignature2.png";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector(".logo-img").src="images/jmsignature.png";
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Store user preference

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}

//Check for saved preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
