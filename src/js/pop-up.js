const openBtn = document.querySelector('[data-modal-pop-open]');
const modal = document.querySelector('[data-modal-pop]');
const closeBtn = document.querySelector('[data-modal-pop-close]');

const handleToggleModal = () => {
  modal.classList.toggle('is-hidden-pop');
  document.body.classList.toggle('no__scroll-pop');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
