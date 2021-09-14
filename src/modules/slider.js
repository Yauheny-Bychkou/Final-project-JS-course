const slider = () => {
  class Slider {
    constructor({ main, wrap, next, prev, infinity = false, position = 0, slidesToShow = 4, responsive = [] }) {
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
      };
      this.responsive = responsive;
    }

    init() {
      this.addGloClass();
      this.addStyle();
      if (this.prev && this.next) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
      if (this.responsive) {
        this.responseInit();
      }
    }
    addGloClass() {
      this.main.classList.add("slider-service");
      this.wrap.classList.add("slider-service__wrap");
      for (const item of this.slides) {
        item.classList.add("slider-service__item");
      }
    }
    addStyle() {
      let style = document.getElementById("slider");

      if (!style) {
        style = document.createElement("style");
        style.id = "sliderCarusel-style";
      }

      style.textContent = `
        .slider-service{
          overflow: hidden !important;
          margin: 0 auto;
        }
        .slider-service__wrap{
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;

        }
        .slider-service__item{
          display: flex !important;
          align-items: center !important;
          flex-direction: column;
          justify-content: center !important;
          flex: 0 0 ${this.options.widthSlide}% !important;
          margin: auto 0 !important;
        }
        
      }`;
      document.head.appendChild(style);
    }
    controlSlider() {
      this.prev.addEventListener("click", this.prevSlider.bind(this));
      this.next.addEventListener("click", this.nextSlider.bind(this));
    }
    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;

        if (this.options.position < 0) {
          this.options.position = this.slides.length - this.slidesToShow;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
    nextSlider() {
      if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
        ++this.options.position;

        if (this.options.position > this.slides.length - this.slidesToShow) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
    addArrow() {
      this.prev = document.createElement("button");
      this.next = document.createElement("button");
      this.prev.className = "glo-slider__next";
      this.next.className = "glo-slider__prev";
      this.main.appendChild(this.prev);
      this.main.appendChild(this.next);
    }
    responseInit() {
      const slidesToShowDefault = this.slidesToShow;
      const allResponse = this.responsive.map((item) => item.breakpoint);
      const maxResponce = Math.max(...allResponse);
      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponce) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slidesToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      };
      checkResponse();
      window.addEventListener("resize", checkResponse);
    }
  }
  const carousel = new Slider({
    main: ".slider",
    wrap: ".slider-wrap",
    prev: ".services__arrow--right",
    next: ".services__arrow--left",
    slidesToShow: 2,
    infinity: true,
    responsive: [
      {
        breakpoint: 576,
        slidesToShow: 1,
      },
    ],
  });
  carousel.init();
};
export default slider;
