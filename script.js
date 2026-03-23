// Elements
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLinks = document.querySelectorAll(".nav-link");

// Open mobile menu
menu.addEventListener("click", () => {
  nav.classList.add("show");
  document.body.style.overflow = "hidden";
});

// Close mobile menu
closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Close menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});

// Optional: close menu on click outside links
nav.addEventListener("click", (e) => {
  if (e.target === nav) {
    nav.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Get In Touch button scroll to contact
const getInTouchBtn = document.querySelector('.extra-nav button');
if (getInTouchBtn) {
  getInTouchBtn.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
}

// Hero button scroll to projects
const heroBtn = document.querySelector('.hero button');
if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    const projectsSection = document.querySelector('#project');
    if (projectsSection) {
      const offset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[name="user_name"]').value;
    const email = this.querySelector('input[name="user_email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    // Simple validation
    if (name && email && message) {
      alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
      this.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      const id = section.getAttribute('id');
      document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Add some CSS for active nav links
const style = document.createElement('style');
style.textContent = `
  nav a.active::after,
  .mobile-nav a.active::after {
    transform: scaleX(1) !important;
  }
  nav a.active,
  .mobile-nav a.active {
    color: #ff4d5a !important;
  }
`;
document.head.appendChild(style);