const openModal = document.querySelector('.add-book');
const closeModal = document.querySelector('#close-modal')
const modal = document.querySelector('.form-modal');

openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})