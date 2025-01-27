const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const sandwich = document.getElementById('sandwich');

sandwich.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', event => {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent.contains(event.target)) {
    modal.style.display = 'none';
  }
});

const modalLinks = document.querySelectorAll('.modal-link');
modalLinks.forEach(link => {
    link.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});