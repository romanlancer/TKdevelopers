(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open]'),
		openModalBtnMenu: document.querySelector('[data-modal-menu-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
	};
	refs.openModalBtn.addEventListener('click', toggleModal);
	refs.openModalBtnMenu.addEventListener('click', toggleModal);
	refs.closeModalBtn.addEventListener('click', toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden');
	}
})();
