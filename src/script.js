document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Navbar Scroll Effect ---
  const navbar = document.getElementById("navbar");
  // Target all text elements that need to change color
  const navTexts = document.querySelectorAll(".nav-text");
  const mobileMenuButton = document.getElementById("mobile-menu-button");

  // We set the "scrolled" state after 50px of scrolling
  const scrollThreshold = 50;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      // Add glass effect
      navbar.classList.add("bg-white/80", "backdrop-blur-md", "shadow-lg");
      navbar.classList.remove("bg-transparent");

      // Change text color for desktop links
      navTexts.forEach((el) => {
        el.classList.add("text-gray-900");
        el.classList.remove("text-white");
      });

      // Change mobile button color
      mobileMenuButton.classList.add("text-gray-900");
      mobileMenuButton.classList.remove("text-white");
    } else {
      // Remove glass effect
      navbar.classList.remove("bg-white/80", "backdrop-blur-md", "shadow-lg");
      navbar.classList.add("bg-transparent");

      // Change text color back to white
      navTexts.forEach((el) => {
        el.classList.remove("text-gray-900");
        el.classList.add("text-tb-900");
      });

      // Change mobile button color back to white
      mobileMenuButton.classList.remove("text-gray-900");
      mobileMenuButton.classList.add("text-tb-900");
    }
  });

  // --- 2. Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });

  // --- 3. Mobile Dropdown (Accordion) Toggle ---
  const mobileCompanyToggle = document.getElementById("mobile-company-toggle");
  const mobileCompanyLinks = document.getElementById("mobile-company-links");
  const mobileArrow = document.getElementById("mobile-arrow");

  mobileCompanyToggle.addEventListener("click", () => {
    mobileCompanyLinks.classList.toggle("hidden");
    mobileArrow.classList.toggle("rotate-180");
  });
});

// FAQs

let currentOpen = null;

function toggleFAQ(num) {
  const answer = document.getElementById(`answer-${num}`);
  const icon = document.getElementById(`icon-${num}`);

  // Close previously opened FAQ if it's different from current
  if (currentOpen !== null && currentOpen !== num) {
    const prevAnswer = document.getElementById(`answer-${currentOpen}`);
    const prevIcon = document.getElementById(`icon-${currentOpen}`);
    prevAnswer.style.maxHeight = "0px";
    prevIcon.style.transform = "rotate(0deg)";
  }

  // Toggle current FAQ
  if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
    answer.style.maxHeight = "0px";
    icon.style.transform = "rotate(0deg)";
    currentOpen = null;
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
    currentOpen = num;
  }
}
