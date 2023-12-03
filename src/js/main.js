/*=============== SHOW MENU ===============*/
/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener("scroll", scrollHeader);
function scrollHeader() {
  const HEADER = document.getElementById("header");
  this.scrollY >= 50
    ? HEADER.classList.add("scroll-header")
    : HEADER.classList.remove("scroll-header");
}
/*=============== DARK LIGHT THEME ===============*/
const moodButton = document.getElementById("mood-btn");
const darkMood = "dark";
const sunIcon = "bxs-sun";
const currentTheme = localStorage.getItem("current-theme");

// Function to get the current theme (dark or light)
const getCurrentTheme = () =>
  document.body.classList.contains(darkMood) ? "dark" : "light";

// Check and apply the current theme and icon on page load
if (currentTheme === "dark") {
  document.body.classList.add(darkMood);
  moodButton.classList.add(sunIcon);
} else {
  document.body.classList.remove(darkMood);
  moodButton.classList.remove(sunIcon);
}
// Event listener to toggle the theme and icon when the button is clicked
moodButton.addEventListener("click", () => {
  document.body.classList.toggle(darkMood);
  moodButton.classList.toggle(sunIcon);

  // Save the theme in local storage
  localStorage.setItem("current-theme", getCurrentTheme());
});

//localStorage.clear()
/*=============== Show Profile ===============*/
let profileContent = document.querySelector(".profile_tab");

// Add click event listener to the document
document.addEventListener("click", (event) => {
  const isProfileContent = event.target.closest(".profile_tab"),
    isActionImg = event.target.closest(".profile"),
    isProfileItemLink = event.target.closest(".profile_item-link"),
    isProfileClose = event.target.closest(".close_tab");

  // Check if the clicked element is the action image, within the profile tab, a profile item link, or the profile close button
  if (
    !isProfileContent &&
    !isActionImg &&
    !isProfileItemLink &&
    !isProfileClose
  ) {
    // If the clicked element is neither the profile tab, the action image, a profile item link, nor the profile close button, hide the profile tab
    profileContent.classList.remove("active");
  } else if (isActionImg || isProfileItemLink || isProfileClose) {
    // If the clicked element is the action image, a profile item link, or the profile close button, toggle the profile tab's active state
    profileContent.classList.toggle("active");
  }
});

/*=============== swiper Home Page ===============*/
var swiper = new Swiper(".swiper-homePage", {
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".home_page .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".home_page .btn_next",
    prevEl: ".home_page .btn_prev",
  },
});

/*=============== Flip Card Event ===============*/

// Add click event listener to the document
document.addEventListener("click", (event) => {
  const cards = document.querySelectorAll(".flip_card");

  cards.forEach((card) => {
    card.classList.remove("do_flip");
  });

  const clickedCard = event.target.closest(".flip_card");
  const isfront = event.target.closest(".front");
  const isBack = event.target.closest(".back");

  if (isfront) {
    clickedCard.classList.add("do_flip");
  }
  if (isBack) {
    clickedCard.classList.remove("do_flip");
  }
});
