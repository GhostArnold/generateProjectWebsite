const burgerBtn = document.querySelector('.navbar .header__burger-btn');
const navList = document.querySelector('.navbar .nav-list ul');

burgerBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  console.log(burgerBtn);
console.log(navList);
});

navList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navList.classList.remove('active');
  }
  console.log(burgerBtn);
console.log(navList);
});

console.log(burgerBtn);
console.log(navList);