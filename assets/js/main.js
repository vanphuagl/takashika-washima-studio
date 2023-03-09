"use strict";

// add event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
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
    delay: 1,
  })
    .to(".c-loading", {
      duration: 1,
      background: "transparent",
      delay: 0.2,
    })
    .set(".c-loading", {
      pointerEvents: "none",
      delay: 0,
    })
    .to(".c-loading.work-loader > .c-loading__title", {
      duration: 0.5,
      opacity: 0,
      delay: 0.4,
    })
    .from(".animate-this", {
      duration: 1,
      opacity: 0,
      stagger: 0.4,
      delay: 0.2,
    })
    .to(".c-header, .c-footer", {
      duration: 1,
      opacity: 1,
    });
});

/* ------------------------------ toggler index ----------------------------- */

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
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

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
