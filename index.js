let frontend = document.getElementById('front');
let program = document.getElementById('pl');
let tools = document.getElementById('tools');

let skill1 = document.getElementById('skill-1');
let skill2 = document.getElementById('skill-2');
let skill3 = document.getElementById('skill-3');

program.addEventListener('click',(e)=>{
    e.preventDefault();
    skill2.style.display ='block';
    skill1.style.display='none';
    skill3.style.display='none';
    program.style.border='2px solid #0098de';
    frontend.style.border='2px ';
    tools.style.border='2px ';
})

frontend.addEventListener('click',(e)=>{
    e.preventDefault();
    skill1.style.display='block';
    skill2.style.display ='none';
    skill3.style.display='none';
    frontend.style.border='2px solid #0098de';
    program.style.border='2px ';
    tools.style.border='2px ';
})

tools.addEventListener('click',(e)=>{
    e.preventDefault();
    skill3.style.display ='block';
    skill1.style.display='none';
    skill2.style.display='none';
    tools.style.border='2px solid #0098de';
    frontend.style.border='2px ';
    program.style.border='2px ';
})

let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let body= document.getElementById('body');


sun.addEventListener('click', (e)=>{
    e.preventDefault();
    sun.style.display='none';
    moon.style.display='block';
   body.style.background='white';
   body.style.color='black';
   
})
moon.addEventListener('click', (e)=>{
    e.preventDefault();
    moon.style.display='none';
    sun.style.display='block';
    body.style.background='#28282B';
    body.style.color='white';
   
})



var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};


for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;
  
  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .5;
    y += (nextDot.y - dot.y) * .5;

  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();


const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function(e){
  if(e.target.id!== 'sidebar' && e.target.id!== 'toggle'){
    toggle.classList.remove('active');
   sidebar.classList.remove('active');
}
  }

toggle.onclick = function(){
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
}