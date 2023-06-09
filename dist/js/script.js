const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centerSlide: true,
  autoplay: {
    delay: 2000,
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 2,
  slidesPerView: 3,
  centerSlide: true,
  mousewheel: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
});

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 2,
  slidesPerView: 4,
  centerSlide: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});

const swiper4 = new Swiper(".swiper4", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 1,
  slidesPerView: 2,
  centerSlide: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
const swiper5 = new Swiper(".swiper5", {
  // Optional parameters
  loop: true,
  direction: "horizontal",
  spaceBetween: 0,
  slidesPerView: 2,
  centerSlide: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
  },
});
const swiper6 = new Swiper(".swiper6", {
  // Optional parameters
  loop: true,
  direction: "horizontal",
  spaceBetween: 0,
  slidesPerView: 2,
  centerSlide: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
});
