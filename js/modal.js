const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".button__open");
const modalBtnClose = document.querySelector(".button__close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
