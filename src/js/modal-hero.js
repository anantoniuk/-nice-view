const openBtn = document.querySelector('[data-modal-hero-open]');
const modal = document.querySelector('[data-modal-hero]');
const closeBtn = document.querySelector('[data-modal-hero-close]');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
  document.body.classList.add('no__scroll-hero');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  document.body.classList.remove('no__scroll-hero');
});
