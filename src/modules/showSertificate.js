const showSertificate = () => {
  
  let link = document.querySelectorAll('.sertificate-document');
  let wrap = document.querySelector('.text-wrap');
  let div = document.createElement("div");
  let img = document.createElement("img");
  let overlay = document.createElement("div");
  let body = document.querySelector('body');
  
  link.forEach((elem)=>{
    elem.addEventListener('click',(event)=>{
      event.preventDefault();
      body.appendChild(overlay); 
      wrap.appendChild(div);
      div.appendChild(img);
      img.setAttribute("src", elem.pathname);
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.bottom = '0';
      overlay.style.left = '0';
      overlay.style.right = '0';
      overlay.style.height = '100vh';
      overlay.style.width = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.45)';
      img.style.position = 'absolute';
      img.style.left = '38%';
      img.style.zIndex = 999;
      img.style.width = "500px";
      img.style.height = "800px";
      
    });
  });
  overlay.addEventListener('click',()=>{
    div.remove();
    overlay.remove();
  });
}

export default showSertificate;