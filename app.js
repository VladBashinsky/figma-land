let button = document.getElementById('login');
let modal = document.querySelector('modal');
let close = document.querySelector('.modal_close'); 
let modalConteiner = document.querySelector('modal_main')


button.addEventListener('click', function() {
  setTimeout(() => {
    document.querySelector('.modal').classList.add('modal_open');
    document.querySelector('body').classList.add('no-scroll');    
  }, 100);

  setTimeout(() => {
    document.querySelector('.modal_main').classList.add('modal_active');
  }, 150);

}); 

close.addEventListener('click', function() {
  setTimeout(() => {
    document.querySelector('.modal').classList.remove('modal_open');
    document.querySelector('body').classList.remove('no-scroll');    
  }, 100);

});



function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}



let burgerBtn = document.querySelector('.burger_btn');


burgerBtn.addEventListener('click', function() {
  setTimeout(() => {
    document.querySelector('.nav_menu').classList.toggle('active');
  }, 200); 
});



