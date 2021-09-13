const toggleMenu = () => {
  const overlay = document.querySelector(".overlay");
  const headerModal = document.querySelector(".header-modal ");
  document.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("headerModal")) {
      headerModal.classList.toggle("header-modal");
      overlay.style.display = "initial";
    } else if (target.classList.contains("header-modal__close")) {
      headerModal.classList.toggle("header-modal");
      overlay.style.display = "none";
    }
  });
};
export default toggleMenu;
