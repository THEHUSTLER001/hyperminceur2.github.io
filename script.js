const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
 
  origin: "top",
  duration: 1000,
};

ScrollReveal().reveal(".header-content", {
  ...scrollRevealOption,
  origin: "right",
  
 
});

ScrollReveal().reveal(".reservation-container", {
  ...scrollRevealOption,
  delay:200,
  origin:'top',
});
ScrollReveal().reveal(".btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".image__bg", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".intro-img", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".content", {
  ...scrollRevealOption,
  delay: 1700,
});

ScrollReveal().reveal("#service1", {
  ...scrollRevealOption,
 origin:"bottom",
  delay: 1900,
  afterReveal:animateFill
});
ScrollReveal().reveal("#service2", {
  
  duration: 1000,
  delay: 2100,
  afterReveal: animateFill
});
ScrollReveal().reveal("#service3", {
  
  duration: 1000,
  delay: 2300,
});

ScrollReveal().reveal(".cta-button", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

ScrollReveal().reveal(".advantages-container", {
  ...scrollRevealOption,
  origin: "top",
  delay: 2400,
  interval: 500,
  afterReveal: startCounter
});
ScrollReveal().reveal(".advantages-list", {
  ...scrollRevealOption,
 
  delay: 2500,
});
ScrollReveal().reveal(".advantage", {
  ...scrollRevealOption,
  origin: "top",
  delay: 2700,
});
ScrollReveal().reveal(".testimonial-section", {
  ...scrollRevealOption,

  origin: "top",
  delay: 2900,
});ScrollReveal().reveal("#H10", {
  ...scrollRevealOption,
  
  delay: 200,
});
ScrollReveal().reveal("#H11", {
  ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal("#H12", {
  ...scrollRevealOption,
  
  delay: 1700,
});ScrollReveal().reveal("#H13", {
  ...scrollRevealOption,
 
  delay: 2400,
});
ScrollReveal().reveal("#H14", {
  ...scrollRevealOption,
  
  delay: 2800,
});
ScrollReveal().reveal(".footer", {
  ...scrollRevealOption,
  
  delay: 2900,
});




   emailjs.init("QqyFjr369B0Zr8Eu5");

   document.getElementById('contact').addEventListener('submit', function(event) {
     event.preventDefault(); 
  
     const form = event.target;
     const button = form.querySelector('button[type="submit"]');
      
     // Disable the button to prevent multiple submissions
     button.disabled = true;
    
    emailjs.sendForm('service_0qf787g', 'template_oqtdwpe', form)
       .then(function(response) {
         console.log('Success:', response);
        alert('Votre message a été envoyé avec succès!');
         form.reset();  // Reset form only after successful submission
         button.disabled = false;   // Re-enable the button
       }, function(error) {
         console.error('Error:', error);
        alert('Une erreur est survenue, veuillez réessayer.');
         button.disabled = false;   //Re-enable the button in case of an error
     });
  });
  

  document.getElementById('scroll-to-form').addEventListener('click', function() {
    document.getElementById('form').scrollIntoView({
      behavior: 'smooth'
    });
  });
   


  function animateFill() {
    const ratingFills = document.querySelectorAll('.rating-fill'); // Select all rating-fill elements
    
    ratingFills.forEach((fill) => {
      const targetWidth = fill.getAttribute('data-fill'); // Get target width from the data-fill attribute
      fill.style.transition = 'width 2s ease-in-out'; // Add smooth transition for the animation
  
      // Apply a slight delay to trigger the animation after the page renders
      setTimeout(() => {
        fill.style.width = targetWidth; // Set the final width from data-fill attribute
      }, 100); // Small delay (100ms) to ensure smooth animation
    });
  }
  
  // Run the animation on page load
  animateFill();
  
  





  





  