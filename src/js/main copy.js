/*=============== SHOW MENU ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener("scroll", scrollHeader);
function scrollHeader() {
  const HEADER = document.getElementById("nav");
  this.scrollY >= 50
    ? HEADER.classList.add("scroll_nav")
    : HEADER.classList.remove("scroll_nav");
}
/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories_container", {
  spaceBetween: 24,
  //centeredSlides: true,
  loop: true,

  grabCursor: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
/*=============== SWIPER PRODUCTS ===============*/
var swiperCategories = new Swiper(".new_container", {
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,

  grabCursor: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active_tab");
    });
    tab.classList.add("active_tab");

    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active_tab");
    });
    target.classList.add("active_tab");
  });
});

//const questions = document.querySelectorAll("[data-question]"),
//  answers = document.querySelectorAll("[answer]");

//questions.forEach((question) => {
//  question.addEventListener("click", () => {
//    const target = document.querySelector(question.dataset.target);

//    answers.forEach((answer) => {
//      answer.classList.remove("active_answer");
//    });
//    target.classList.add("active_answer");
//  });
//});

//const questions = document.querySelectorAll("[data-question]"),
//  answers = document.querySelectorAll("[answer]");

//questions.forEach((question) => {
//  question.addEventListener("click", () => {
//    const target = document.querySelector(question.dataset.question);

//    answers.forEach((answer) => {
//      answer.classList.remove("active_answer");
//    });
//    if (target.classList.contains("active_answer")) {
//      target.classList.remove("active_answer");
//    } else {
//      target.classList.add("active_answer");
//    }
//  });
//});
const questions = document.querySelectorAll("[data-question]");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const target = document.querySelector(question.dataset.question);

    if (target.classList.contains("active_answer")) {
      target.classList.remove("active_answer");
    } else {
      answers.forEach((answer) => {
        answer.classList.remove("active_answer");
      });
      target.classList.add("active_answer");
    }
  });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 112,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        `.nav_menu a[href*="${sectionId}"]`
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active_link");
    } else {
      sectionClass.classList.remove("active_link");
    }
  });
};
// =================== Deals Countdown Time ===================
const countdowns = document.querySelectorAll(".countdown");
countdowns.forEach((countdown) => {
  const endTime = new Date(countdown.getAttribute("data-end-time")).getTime();

  setInterval(function () {
    const currentTime = new Date().getTime();
    const timeRemaining = endTime - currentTime;

    if (timeRemaining <= 0) {
      clearInterval();
      countdown.querySelectorAll(".countdown_period").forEach((period) => {
        period.textContent = "00";
      });
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      if (countdown.querySelector("[countdown_days]")) {
        countdown.querySelector("[countdown_days]").textContent = days
          .toString()
          .padStart(2, "0");
      }

      if (countdown.querySelector("[countdown_hours]")) {
        countdown.querySelector("[countdown_hours]").textContent = hours
          .toString()
          .padStart(2, "0");
      }

      if (countdown.querySelector("[countdown_mins]")) {
        countdown.querySelector("[countdown_mins]").textContent = minutes
          .toString()
          .padStart(2, "0");
      }

      if (countdown.querySelector("[countdown_sec]")) {
        countdown.querySelector("[countdown_sec]").textContent = seconds
          .toString()
          .padStart(2, "0");
      }
    }
  }, 1000);
});

// =================== scroller ===================
//let scroller = document.createElement("div");
//scroller.classList.add("scroller");
//document.body.appendChild(scroller);

//window.addEventListener("scroll", () => {
//  let height =
//    document.documentElement.scrollHeight -
//    document.documentElement.clientHeight;
//  let scrollTop = document.documentElement.scrollTop;
//  scroller.style.width = `${(scrollTop / height) * 100}%`;
//});
