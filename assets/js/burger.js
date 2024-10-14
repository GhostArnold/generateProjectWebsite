const hamburger = document.querySelector('.header__burger-btn');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

if (hamburger) {
  hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('no-scroll');
    console.log('Hamburger clicked'); // Отладка
  });

  mobileNav.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      mobileNav.classList.remove('active');
      hamburger.classList.remove('active');
      body.classList.remove('no-scroll');
      console.log('Nav link clicked'); // Отладка
    }
  });
} else {
  console.error('Hamburger button not found'); // Отладка
}