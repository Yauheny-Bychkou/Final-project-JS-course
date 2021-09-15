
const sendForm = () => {
  
  const errorMessage = "Что-то пошло нет так...",
    loadMessage = "Загрузка...",
    successMesage = "Спасибо! Мы скоро с вами свяжемся!";

  const form = document.querySelectorAll(".form-horizontal");
  let total = document.getElementById('calc-total');
  const loaddMessage = document.createElement("div");
  const stususMessage = document.createElement("div");
  
  loaddMessage.classList.add("example");
  stususMessage.style.cssText = "font-size: 2rem";
  stususMessage.style.cssText = "color: black";

  form.forEach((elem) => {
    elem.addEventListener("submit", (event) => {
      const input = elem.querySelectorAll("input");
      event.preventDefault();

      elem.appendChild(stususMessage);
      elem.appendChild(loaddMessage);
      stususMessage.textContent = loadMessage;
      const formData = new FormData(elem);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      if(total){
        body.total = total.value;
      }
      const postData = (body) => {
        console.log(total.value);
        return fetch("./server.php", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        });
      };

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("status netwokr not 200");
          }
          stususMessage.textContent = successMesage;
          setTimeout(() => (stususMessage.textContent = ""), 5000);
          loaddMessage.remove();
          input.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          stususMessage.textContent = errorMessage;
          console.error(error);
          setTimeout(() => {
            loaddMessage.remove();
            stususMessage.textContent = "";
          }, 5000);
        });
    });
  });
};
export default sendForm;
