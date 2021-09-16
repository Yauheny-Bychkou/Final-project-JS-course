(()=>{"use strict";function t(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s,a,l,d,c,u,h,p;c=document.querySelector(".overlay"),u=document.querySelector(".header-modal "),h=document.querySelector(".navbar"),p=document.querySelector(".services-modal"),window.addEventListener("scroll",(function(t){pageYOffset>=214.39999389648438?h.style.margin="0":h.style.marginTop="-60px"})),document.addEventListener("click",(function(t){var e=t.target;e.classList.contains("headerModal")?(u.style.display="initial",c.style.display="initial"):e.classList.contains("header-modal__close")?(u.style.display="none",c.style.display="none"):e.closest(".navbar")&&e.classList.contains("fancyboxModal")?(u.classList.toggle("header-modal"),c.style.display="initial"):e.classList.contains("service-link")?(p.style.display="initial",c.style.display="initial"):e.classList.contains("services-modal__close")?(p.style.display="none",c.style.display="none"):e.classList.contains("smooth-scroll__img")?window.scrollTo({top:0,behavior:"smooth"}):e.classList.contains("overlay")&&(u.style.display="none",c.style.display="none",p.style.display="none")})),new(function(){function i(t){var e=t.main,n=t.wrap,o=t.next,r=t.prev,s=t.infinity,a=void 0!==s&&s,l=t.position,d=void 0===l?0:l,c=t.slidesToShow,u=void 0===c?4:c,h=t.responsive,p=void 0===h?[]:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.main=document.querySelector(e),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.slidesToShow=u,this.options={position:d,infinity:a,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=p}var o,r;return o=i,(r=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,n=function(e,n){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=t(e))){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){i=i.call(e)},n:function(){var t=i.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(l)throw s}}}}(this.slides);try{for(n.s();!(e=n.n()).done;)e.value.classList.add("glo-slider__item")}catch(t){n.e(t)}finally{n.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("slider");t||((t=document.createElement("style")).id="sliderCarusel-style"),t.textContent="\n      .glo-slider{\n        overflow: hidden !important;\n        width: 559px;\n        margin: 0 auto;\n      }\n      .glo-slider__wrap{\n        display: flex !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n        \n      }\n      .glo-slider__item{\n        display: flex !important;\n        align-items: center !important;\n        flex-direction: column;\n        justify-content: center !important;\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: auto 0 !important;\n      }\n      .glo-slider__prev,\n      .glo-slider__next{\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n      .glo-slider__next{\n        border-left-color: #19b5fe;\n      }\n      .glo-slider__prev{\n        border-right-color: #19b5fe;\n      }\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus{\n        background: transparent;\n        outline: transparent;\n      }\n      @media (max-width: 576px) {\n      .glo-slider {\n        width: 188px;\n      }\n    }"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next)}},{key:"responseInit",value:function(){var n,i=this,o=this.slidesToShow,r=this.responsive.map((function(t){return t.breakpoint})),s=Math.max.apply(Math,function(t){if(Array.isArray(t))return e(t)}(n=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){var t=document.documentElement.clientWidth;if(t<s)for(var e=0;e<r.length;e++)t<r[e]&&(i.slidesToShow=i.responsive[e].slidesToShow,i.options.widthSlide=Math.floor(100/i.slidesToShow),i.addStyle());else i.slidesToShow=o,i.options.widthSlide=Math.floor(100/i.slidesToShow),i.addStyle()};a(),window.addEventListener("resize",a)}}])&&n(o.prototype,r),i}())({main:".benefits-inner",wrap:".benefits-wrap",prev:".benefits__arrow--right",next:".benefits__arrow--left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:576,slidesToShow:1}]}).init(),new(function(){function t(e){var n=e.main,i=e.wrap,o=e.next,r=e.prev,s=e.infinity,a=void 0!==s&&s,l=e.position,d=void 0===l?0:l,c=e.slidesToShow,u=void 0===c?4:c,h=e.responsive,p=void 0===h?[]:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.slidesToShow=u,this.options={position:d,infinity:a,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=p}var e,n;return e=t,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("slider-service"),this.wrap.classList.add("slider-service__wrap");var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=i(t))){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("slider-service__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("slider");t||((t=document.createElement("style")).id="sliderCarusel-style"),t.textContent="\n        .slider-service{\n          overflow: hidden !important;\n          margin: 0 auto;\n        }\n        .slider-service__wrap{\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n\n        }\n        .slider-service__item{\n          display: flex !important;\n          align-items: center !important;\n          flex-direction: column;\n          justify-content: center !important;\n          flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n          margin: auto 0 !important;\n        }\n        \n      }"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next)}},{key:"responseInit",value:function(){var t,e=this,n=this.slidesToShow,r=this.responsive.map((function(t){return t.breakpoint})),s=Math.max.apply(Math,function(t){if(Array.isArray(t))return o(t)}(t=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){var t=document.documentElement.clientWidth;if(t<s)for(var i=0;i<r.length;i++)t<r[i]&&(e.slidesToShow=e.responsive[i].slidesToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=n,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};a(),window.addEventListener("resize",a)}}])&&r(e.prototype,n),t}())({main:".slider",wrap:".slider-wrap",prev:".services__arrow--right",next:".services__arrow--left",slidesToShow:2,infinity:!0,responsive:[{breakpoint:576,slidesToShow:1}]}).init(),function(t){var e=document.querySelectorAll(".days"),n=document.querySelectorAll(".hours"),i=document.querySelectorAll(".minutes"),o=document.querySelectorAll(".seconds");function r(){var r,s,a,l,d=(r=(new Date(t).getTime()-(new Date).getTime())/1e3,s=Math.floor(r%60),a=Math.floor(r/60%60),l=Math.floor(r/60%24),{timeRemaining:r,days:Math.floor(r/3600/24),hours:l,minutes:a,seconds:s});d.timeRemaining>0?(e.forEach((function(t){t.textContent=d.days<10?"0".concat(d.days):"".concat(d.days)})),n.forEach((function(t){t.textContent=d.hours<10?"0".concat(d.hours):"".concat(d.hours)})),i.forEach((function(t){t.textContent=d.minutes<10?"0".concat(d.minutes):"".concat(d.minutes)})),o.forEach((function(t){t.textContent=d.seconds<10?"0".concat(d.seconds):"".concat(d.seconds)}))):(e.forEach((function(t){t.textContent="00"})),n.forEach((function(t){t.textContent="00"})),i.forEach((function(t){t.textContent="00"})),o.forEach((function(t){t.textContent="00"})))}r(),setInterval((function(){r()}),1e3)}("16 september 2021"),s=document.querySelectorAll(".form-horizontal"),a=document.getElementById("calc-total"),l=document.createElement("div"),d=document.createElement("div"),l.classList.add("example"),d.style.cssText="font-size: 2rem",d.style.cssText="color: black",s.forEach((function(t){t.addEventListener("submit",(function(e){var n=t.querySelectorAll("input");e.preventDefault(),t.appendChild(d),t.appendChild(l),d.textContent="Загрузка...";var i=new FormData(t),o={};i.forEach((function(t,e){o[e]=t})),a&&(o.total=a.value),function(t){return fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)})}(o).then((function(t){if(200!==t.status)throw new Error("status netwokr not 200");d.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){return d.textContent=""}),5e3),l.remove(),n.forEach((function(t){t.value=""}))})).catch((function(t){d.textContent="Что-то пошло нет так...",console.error(t),setTimeout((function(){l.remove(),d.textContent=""}),5e3)}))}))})),document.querySelectorAll("input").forEach((function(t){t.setAttribute("required"," "),"fio"===t.getAttribute("name")?(t.setAttribute("minlength",2),t.setAttribute("title","Минимум 2 буквы"),t.addEventListener("blur",(function(){t.value=t.value.replace(/[^а-яА-ЯёЁa-zA-Z\ ]/g,"")}))):"phone"===t.getAttribute("name")&&(t.setAttribute("title","Минимум 8 символов, максимум 16 символов"),t.setAttribute("required"," "),t.setAttribute("minlength",8),t.setAttribute("maxlength",16),t.addEventListener("blur",(function(){t.value=t.value.replace(/[^0-9\+]/g,"")})))})),function(){var t,e,n=document.querySelector(".calc-block"),i=document.getElementById("calc-type"),o=document.getElementById("calc-type-material"),r=document.getElementById("calc-input"),s=document.getElementById("calc-total");n&&(r.addEventListener("input",(function(t){t.target.value=t.target.value.replace(/\D/,"")})),n.addEventListener("change",(function(n){var a=n.target;(a.matches("select")||a.matches("input"))&&(e=i.options[i.selectedIndex].value,t=o.options[o.selectedIndex].value,s.value=Math.floor(e*t*r.value))})))}(),function(){var t=document.querySelectorAll(".sertificate-document"),e=document.querySelector(".text-wrap"),n=document.createElement("div"),i=document.createElement("img"),o=document.createElement("div"),r=document.querySelector("body");t.forEach((function(t){t.addEventListener("click",(function(s){s.preventDefault(),r.appendChild(o),e.appendChild(n),n.appendChild(i),i.setAttribute("src",t.pathname),o.style.position="fixed",o.style.top="0",o.style.bottom="0",o.style.left="0",o.style.right="0",o.style.height="100vh",o.style.width="100%",o.style.backgroundColor="rgba(0, 0, 0, 0.45)",i.style.position="absolute",i.style.left="38%",i.style.zIndex=999,i.style.width="500px",i.style.height="800px"}))})),o.addEventListener("click",(function(){n.remove(),o.remove()}))}()})();