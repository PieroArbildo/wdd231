document.addEventListener('DOMContentLoaded', function() {
  const modalBtns = document.querySelectorAll('.modal-btn');
  const modals = document.querySelectorAll('.modal');

  modalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const modalId = btn.dataset.modal;
      const modal = document.getElementById(modalId);

      modal.style.display = 'block';

      const closeBtn = modal.querySelector('.close');
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
      });

      window.addEventListener('click', function(event) {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
});