const openBtn = document.querySelector('[data-modal-hero-open]');
const modal = document.querySelector('[data-modal-hero]');
const closeBtn = document.querySelector('[data-modal-hero-close]');

const handleToggleModal = () => {
  modal.classList.toggle('is-hidden-hero');
  document.body.classList.toggle('no__scroll-hero');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
