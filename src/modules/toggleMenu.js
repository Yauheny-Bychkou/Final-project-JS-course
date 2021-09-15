const toggleMenu = () => {
  const overlay = document.querySelector(".overlay"),
    headerModal = document.querySelector(".header-modal "),
    navbar = document.querySelector(".navbar"),
    service = document.querySelector(".services-modal");

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
    } else if (target.classList.contains("service-link")) {
      service.style.display = "initial";
      overlay.style.display = "initial";
    } else if (target.classList.contains("services-modal__close")) {
      service.style.display = "none";
      overlay.style.display = "none";
    } else if (target.classList.contains("smooth-scroll__img")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } 
  });
};
export default toggleMenu;
