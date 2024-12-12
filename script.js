let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelectorAll(".image-slider img").forEach((images) => {
  images.onclick = () => {
    var src = images.getAttribute("src");
    document.querySelector(".main-home-image").src = src;
  };
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("bookingForm");
  const successMessage = document.getElementById("successMessage");
  const emailInput = form.querySelector('input[type="email"]');
  const phoneInput = form.querySelector('input[type="number"]');

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Phone number validation
  const phonePattern = /^\d{10,15}$/; // Adjust the range as needed
  if (!phonePattern.test(phoneInput.value)) {
    alert("Please enter a valid phone number.");
    return;
  }

  // Show success message
  successMessage.style.display = "block";

  // Reset form
  form.reset();

  // Hide success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
}
