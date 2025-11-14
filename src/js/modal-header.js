const openBtn = document.querySelector('[data-modal-header-open]');
const modal = document.querySelector('[data-modal-header]');
const closeBtn = document.querySelector('[data-modal-header-close]');

const handleToggleModal = () => {
  modal.classList.toggle('is-hidden-header');
  document.body.classList.toggle('no__scroll-header');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
