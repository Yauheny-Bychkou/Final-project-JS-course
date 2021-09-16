
const validateInput = () => {
  let inputs = document.querySelectorAll('input');
  inputs.forEach((elem)=>{
    elem.setAttribute("required", " ");
   
    if (elem.getAttribute("name") === "fio") {
       elem.setAttribute("pattern", "[а-яА-ЯёЁa-zA-Z]{2,}");
      elem.setAttribute("minlength", 3);
      elem.setAttribute("title", "Минимум 2 буквы");
        elem.addEventListener("blur", () => {
        elem.value = elem.value.replace(/[^а-яА-ЯёЁa-zA-Z\ ]/g, "");
      });
      
    } else  if (elem.getAttribute("name") === "phone") {
       elem.setAttribute("title", "Минимум 12 символов, максимум 16 символов");
       elem.setAttribute("pattern", "[0-9]{12,16}");
       elem.setAttribute("required", " ");
       elem.setAttribute("minlength", 12);
       elem.setAttribute("maxlength", 16);
       elem.addEventListener("blur", () => {
        elem.value = elem.value.replace(/[^0-9\+]/g, "");
      });
    }
  });
};

export default validateInput;
