
const validateInput = () => {
  let inputs = document.querySelectorAll('input');
  inputs.forEach((elem)=>{
    elem.setAttribute("required", " ");
    if (elem.getAttribute("name") === "fio") {
      elem.setAttribute("minlength", 2);
      elem.setAttribute("title", "Минимум 2 буквы");
        elem.addEventListener("blur", () => {
        elem.value = elem.value.replace(/[^а-яА-ЯёЁa-zA-Z\ ]/g, "");
      });
      
    } else  if (elem.getAttribute("name") === "phone") {
       elem.setAttribute("title", "Минимум 8 символов, максимум 16 символов");
       elem.setAttribute("required", " ");
       elem.setAttribute("minlength", 8);
       elem.setAttribute("maxlength", 16);
       elem.addEventListener("blur", () => {
        elem.value = elem.value.replace(/[^0-9\+]/g, "");
      });
    }
  });
};

export default validateInput;
