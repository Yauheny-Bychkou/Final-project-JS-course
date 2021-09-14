const validateInput = () => {
  let inputsName = document.querySelectorAll(".name-discont");
  let inputsPhone = document.querySelectorAll(".phone-discont");
 inputsName.forEach((elem)=>{
   elem.setAttribute("minlength", 2);
   elem.setAttribute("required", " ");
    elem.setAttribute("title", "Минимум 2 буквы");
   elem.addEventListener("blur", () => {
        elem.value = elem.value.replace(/[^а-яА-ЯёЁa-zA-Z\ ]/g, "");
      });
 })
 inputsPhone.forEach((elem)=>{
    elem.setAttribute("title", "Минимум 8 символов, максимум 16 символов");
    elem.setAttribute("required", " ");
    elem.setAttribute("minlength", 8);
    elem.setAttribute("maxlength", 16);
    elem.addEventListener("blur", () => {
        elem.value = elem.value.replace(/[^0-9\+]/g, "");
      });
 });
  
};
export default validateInput;
