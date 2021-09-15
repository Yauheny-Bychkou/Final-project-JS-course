const showSertificate = () => {
  const overlay = document.querySelector(".overlay");
  let link = document.querySelectorAll('.sertificate-document');
  let wrap = document.querySelector('.text-wrap');
  let div = document.createElement("div");
  let img = document.createElement("img");
  
  link.forEach((elem)=>{
    elem.addEventListener('click',(event)=>{
      event.preventDefault();
      wrap.appendChild(div);
      div.appendChild(img);
      img.setAttribute("src", elem.pathname);
      overlay.style.display = "initial";
      img.style.position = 'absolute';
      img.style.left = '38%';
      img.style.zIndex = 999;
      img.style.width = "500px";
      img.style.height = "800px";
      
    });
  });
  overlay.addEventListener('click',()=>{
    div.remove();
    overlay.style.display = "none";
  });
}

export default showSertificate;