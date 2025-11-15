const openBtn = document.querySelector('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-modal-close]');

const handleToggleModal = () => {
  modal.classList.toggle('is-hidden-apartment');
  document.body.classList.toggle('.no__scroll-apartment');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
