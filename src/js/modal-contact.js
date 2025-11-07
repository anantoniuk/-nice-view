const openBtn = document.querySelector('[data-modal-contact-open]');
const modal = document.querySelector('[data-modal-contact]');
const closeBtn = document.querySelector('[data-modal-contact-close]');

const handleToggleModal = () => {
  modal.classList.toggle('is-hidden-contact');
  document.body.classList.toggle('no__scroll-contact');
};

openBtn.addEventListener('click', handleToggleModal);
closeBtn.addEventListener('click', handleToggleModal);
