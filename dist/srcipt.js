let menuIcon = document.getElementById('menuIcon');
let closeBtn = document.getElementById('close');
let mobileMenu = document.getElementById('mobile-menu');
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
const html = document.querySelector('html');
let items = document.getElementById('items');



menuIcon.onclick = function(){
  mobileMenu.classList.toggle('hidden')
  menuIcon.classList.add('hide');
  closeBtn.classList.remove('hide');
}
closeBtn.onclick= function(){
  mobileMenu.classList.toggle('hidden')
  menuIcon.classList.remove('hide');
  closeBtn.classList.add('hide');
}

moon.onclick =function(){
html.classList.toggle('dark')
moon.classList.add('hide');
sun.classList.remove('hide');
};
sun.onclick =function(){
  html.classList.toggle('dark')
  sun.classList.add('hide');
  moon.classList.remove('hide');
  };
