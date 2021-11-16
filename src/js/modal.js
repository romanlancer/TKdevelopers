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

	refs.modal.addEventListener('click', removeModal);

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden');
	}

	function removeModal(e) {
		if (e.target === refs.modal) {
			refs.modal.classList.add('is-hidden');
		}
	}
})();

// (() => {
// 	const refs = {
// 		openModalBtnLocation: document.querySelector('[data-modal-location-open]'),
// 		closeModalBtnLocation: document.querySelector(
// 			'[data-modal-location-close]',
// 		),
// 		modalLocation: document.querySelector('[data-modal-location]'),
// 	};

// 	refs.openModalBtnLocation.addEventListener('click', toggleModal);
// 	refs.closeModalBtnLocation.addEventListener('click', toggleModal);

// 	refs.modal.addEventListener('click', removeModal);

// 	function toggleModal() {
// 		refs.modal.classList.toggle('is-hidden');
// 	}

// 	function removeModal(e) {
// 		if (e.target === refs.modal) {
// 			refs.modal.classList.add('is-hidden');
// 		}
// 	}
// })();

// (() => {
// 	const refs = {
// 		openModalBtnAbout: document.querySelector('[data-modal-about-open]'),
// 		closeModalBtnAbout: document.querySelector('[data-modal-about-close]'),
// 		modalAbout: document.querySelector('[data-modal-about]'),
// 	};

// 	refs.openModalBtnAbout.addEventListener('click', toggleModal);
// 	refs.closeModalBtnAbout.addEventListener('click', toggleModal);

// 	refs.modal.addEventListener('click', removeModal);

// 	function toggleModal() {
// 		refs.modal.classList.toggle('is-hidden');
// 	}

// 	function removeModal(e) {
// 		if (e.target === refs.modal) {
// 			refs.modal.classList.add('is-hidden');
// 		}
// 	}
// })();
