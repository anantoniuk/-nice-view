const popup = document.querySelector('[data-modal-subscribe]');
const subscribeForm = document.querySelector('[data-form-subscribe]');
const modal = document.querySelector('[data-modal-pop]');
const subscribeContent = document.querySelector('[data-form-content]');
const closeBtn = document.querySelector('[data-modal-pop-adress-close]');

console.log(closeBtn);
const handlePopupClose = event => {
  if (subscribeContent && !subscribeContent.contains(event.target)) {
    popup.close();
    document.body.classList.remove('no__scroll-pop');
  }
};

const handleSubmit = event => {
  event.preventDefault();
  modal.classList.add('is-hidden-pop');
  popup.showModal();
  event.target.reset();
};

subscribeForm?.addEventListener('submit', handleSubmit);

closeBtn.addEventListener('click', handlePopupClose);
