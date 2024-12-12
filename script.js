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

  // Clear previous error states
  clearErrors();

  // Validation checks
  let hasErrors = false;

  // Email validation - more comprehensive pattern
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    showError(
      emailInput,
      "Please enter a valid email address (e.g., name@example.com)"
    );
    hasErrors = true;
  }

  // Phone number validation - more flexible pattern
  const phonePattern = /^[\d\s()+.-]{10,15}$/;
  if (!phonePattern.test(phoneInput.value.replace(/\s+/g, ""))) {
    showError(phoneInput, "Please enter a valid phone number (10-15 digits)");
    hasErrors = true;
  }

  if (hasErrors) return;

  // Show success message
  successMessage.style.display = "block";
  successMessage.textContent = "Booking submitted successfully!";
  successMessage.className = "success-message";

  // Reset form
  form.reset();

  // Hide success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
}

function showError(input, message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  input.classList.add("error");
  input.parentNode.insertBefore(errorDiv, input.nextSibling);
}

function clearErrors() {
  document
    .querySelectorAll(".error-message")
    .forEach((error) => error.remove());
  document
    .querySelectorAll(".error")
    .forEach((input) => input.classList.remove("error"));
}
