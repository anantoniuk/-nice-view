const openBtn = document.querySelector('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-modal-close]');
const modalTitle = document.querySelector('[data-modalTitle]');

const handleOpenModal = event => {
  const target = event.target.closest('.apartment__card');
  if (!target) return;
  modalTitle.textContent = target.dataset.housename;
  modal.classList.remove('is-hidden-apartment');
  document.body.classList.add('.no__scroll-apartment');
};
const handleCloseModal = event => {
  modal.classList.add('is-hidden-apartment');
  document.body.classList.remove('.no__scroll-apartment');
};

openBtn.addEventListener('click', handleOpenModal);
closeBtn.addEventListener('click', handleCloseModal);
