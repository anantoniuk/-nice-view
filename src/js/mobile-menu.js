const menu = document.querySelector('[data-menu]');
const menuBtn = document.querySelector('[data-menu-btn]');
const links = document.querySelectorAll('[data-mobile-link]');

const handleMenu = () => {
  menu.classList.toggle('is-open');
  menuBtn.classList.toggle('is-open');
  document.body.classList.toggle('no__scroll');
};
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuBtn.classList.remove('is-open');
    document.body.classList.remove('no__scroll');
  });
});

menuBtn.addEventListener('click', handleMenu);
