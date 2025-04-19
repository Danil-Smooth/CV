document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('credo-modal');
	const button = document.querySelector('footer .button-link'); // добавили уточнение
	const closeBtn = document.querySelector('.close');
  
	button.addEventListener('click', () => {
	  modal.style.display = 'flex';
	});
  
	closeBtn.addEventListener('click', () => {
	  modal.style.display = 'none';
	});
  
	window.addEventListener('click', (e) => {
	  if (e.target === modal) {
		modal.style.display = 'none';
	  }
	});
  });
  