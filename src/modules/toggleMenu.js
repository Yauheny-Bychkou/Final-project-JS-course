const toggleMenu = () => {
  const overlay = document.querySelector(".overlay");
  const headerModal = document.querySelector(".header-modal ");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function (e) {
    if (pageYOffset >= 214.39999389648438) {
      navbar.style.margin = "0";
    } else {
      navbar.style.marginTop = "-60px";
    }
  });

  document.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("headerModal")) {
      headerModal.classList.toggle("header-modal");
      overlay.style.display = "initial";
    } else if (target.classList.contains("header-modal__close")) {
      headerModal.classList.toggle("header-modal");
      overlay.style.display = "none";
    } else if (target.closest(".navbar") && target.classList.contains("fancyboxModal")) {
      headerModal.classList.toggle("header-modal");
      overlay.style.display = "initial";
    }
  });
};
export default toggleMenu;
