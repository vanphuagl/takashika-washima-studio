"use strict";

// add event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
};

/* --------------------------- resize mobile 100vh -------------------------- */

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty(
    "--app-height",
    `${document.documentElement.clientHeight}px`
  );
};
window.addEventListener("resize", appHeight);
appHeight();

/* ------------------------------ refresh page ------------------------------ */

["pageshow", "load"].forEach(function (evt) {
  window.addEventListener(evt, function () {
    document.body.classList.remove("fadeout");
  });
});

$(window).on("load", function () {
  const tl = gsap.timeline();

  tl.to(".c-loading__title", {
    duration: 1,
    opacity: 1,
    delay: 0.4,
  })
    .to(".c-loading", {
      duration: 1,
      background: "transparent",
      delay: 0.2,
    })
    .set(".c-loading", {
      pointerEvents: "none",
    })
    .from(".animate-this", {
      duration: 1,
      opacity: 0,
      stagger: 0.4,
      delay: 0.2,
    })
    .to(".c-header, .c-footer", {
      duration: 0.8,
      opacity: 1,
      delay: 0.2,
    }, "-=0.4")
    .to(
      ".c-loading.work-page > .c-loading__title",
      {
        duration: 0.5,
        opacity: 0,
        delay: 0.2,
      },
      "-=0.8"
    );
});

/* ------------------------------ toggler index ----------------------------- */

const [textTogglers, text] = [
  document.querySelectorAll("[data-text-toggler]"),
  document.querySelector("[data-text]"),
];

const toggleText = function () {
  text.classList.toggle("toggle");
  document.body.classList.toggle("active");
};

addEventOnElements(textTogglers, "click", toggleText);

/* ------------------------------ toggler text ------------------------------ */

const [indexTogglers, index] = [
  document.querySelectorAll("[data-index-toggler]"),
  document.querySelector("[data-index]"),
];

const toggleIndex = function () {
  index.classList.toggle("toggle");
  document.body.classList.toggle("active");
};

addEventOnElements(indexTogglers, "click", toggleIndex);

/* ------------------------------ scroll to top ----------------------------- */

const scrollTop = document.querySelector(".c-footer__backtotop");

const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
addEventOnElements(scrollTop, "click", scrollToTop);

/* ------------------------------- tabs switch ------------------------------ */

$(document).on("click", ".tab-link", function () {
  let tabID = $(this).attr("data-tab");

  $(this).addClass("active").siblings().removeClass("active");
  $("#tab-" + tabID)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(document).on("click", ".lang-link", function () {
  let langID = $(this).attr("data-lang");

  $(this).addClass("active").siblings().removeClass("active");
  $(".lang-" + langID)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

/* ---------------------------- lick link fadeout --------------------------- */

$(document).on("click", 'a[href^="#"]', function (e) {
  e.preventDefault();
});

$(document).on(
  "click",
  'a:not([href^="#"]):not([target]):not([href^="mailto"])',
  function (e) {
    e.preventDefault();
    const url = $(this).attr("href");

    if (url !== "") {
      const idx = url.indexOf("#");
      const hash = idx != -1 ? url.substring(idx) : "";

      if ($(hash).length > 0) {
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          300
        );
        return false;
      }

      $("body").addClass("fadeout");
      setTimeout(function () {
        window.location = url;
      }, 600);
    }
    return false;
  }
);

/* ------------------------------- work swiper ------------------------------ */

const deactiveButton = () => {
  if ($(".button-swiper").hasClass("swiper-button-disabled")) {
    $(".button-swiper").removeClass("swiper-button-disabled");
    $(".button-swiper").attr("aria-disabled", "false");
    $(".button-swiper").removeAttr("disabled");
  }
};

const swiperWorkFunction = () => {
  if (document.getElementById("work-swiper")) {
    const swiper = new Swiper("#work-swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed: 600,
      initialSlide: 1,
      centeredSlides: true,
      breakpoints: {
        0: {
          spaceBetween: 30,
          allowTouchMove: true,
          slidesPerView: 1,
        },
        835: {
          spaceBetween: 200,
          allowTouchMove: false,
          slidesPerView: 1.58,
        },
      },
      on: {
        slideChange: function () {
          let currentSlide = this.realIndex + 1;
          document.querySelector(".current-slide").innerHTML =
            "( " + currentSlide;
        },
        beforeInit: function () {
          let numOfSlides =
            this.wrapperEl.querySelectorAll(".swiper-slide").length;
          document.querySelector(".total-slides").innerHTML =
            numOfSlides + " )";
        },
      },
    });

    // deactive button control
    deactiveButton();
    swiper.on("slideNextTransitionStart", function () {
      deactiveButton();
    });
    swiper.on("slidePrevTransitionStart", function () {
      deactiveButton();
    });
  }
};

swiperWorkFunction();

/* ------------------------------ custom cursor ----------------------------- */

const cursorPrev = document.querySelector(".cursor-prev");
const cursorNext = document.querySelector(".cursor-next");

function mousemoveHandler(e) {
  const target = e.target;
  const tl = gsap.timeline({
    defaults: {
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out",
    },
  });

  if (
    document.querySelector(".swiper-button-next") &&
    document.querySelector(".swiper-button-prev")
  ) {
    // hover section slider
    if (
      target.tagName.toLowerCase() === "button" &&
      target.closest(".swiper-button-next")
    ) {
      tl.to(cursorPrev, {
        opacity: 0,
      }).to(
        cursorNext,
        {
          opacity: 1,
        },
        "-=0.5"
      );
    } else if (
      target.tagName.toLowerCase() === "button" &&
      target.closest(".swiper-button-prev")
    ) {
      tl.to(cursorPrev, {
        opacity: 1,
      }).to(
        cursorNext,
        {
          opacity: 0,
        },
        "-=0.5"
      );
    } else {
      tl.to(".cursor", {
        opacity: 0,
      });
    }
  }
}

function mouseleaveHandler() {
  if (document.querySelector(".cursor")) {
    gsap.to(".cursor", {
      opacity: 0,
    });
  }
}

document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseleave", mouseleaveHandler);

/* ---------------------- catch select href not working --------------------- */

$(function () {
  let isIOS =
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !window.MSStream;
  if (isIOS) {
    $("a").on("click touchend", function () {
      let link = $(this).attr("href");
      let target = $(this).attr("target");
      if (target === "_blank") {
        window.open(link, "blank"); // opens in new window as requested
        return false; // prevent anchor click
      }
    });
  }
});

/* ------------------------------- error page ------------------------------- */
if (document.querySelector(".p-404__wrapper")) {
  gsap.from(".p-404__wrapper > span", 1.5, {
    top: "-100vh",
    ease: "bounce.out",
    delay: 1,
    stagger: 0.2,
  });
}
