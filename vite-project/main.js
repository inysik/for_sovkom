const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', (e) => {
  e.preventDefault();
  const element = e.target;

  if (element.classList.contains('with-arrow')) {
    element.classList.toggle('link--active');
    element.classList.toggle('with-arrow--direction-bottom');
  }
})

const buttonMenu =  document.querySelector('.button-menu')
buttonMenu.addEventListener('click',(e)=> {
  burgerMenu.classList.toggle('burger-menu--active');
  overlay.classList.toggle('overlay--active');
}

)
