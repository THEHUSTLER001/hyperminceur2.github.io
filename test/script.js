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
 
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-content", {
  ...scrollRevealOption,
  origin: "top",
 
});

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 1500,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 2000,
  interval: 500,
});
ScrollReveal().reveal(".services", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2500,
});
ScrollReveal().reveal(".service-items", {
  ...scrollRevealOption,
  origin:"top",
  delay: 2700,
});
ScrollReveal().reveal(".testimonials", {
  ...scrollRevealOption,
  origin: "top",
  delay: 3000,
});
ScrollReveal().reveal(".testimonial-card", {
  ...scrollRevealOption,
  origin:"top",
  delay: 3500,
});
ScrollReveal().reveal(".graph-container", {
  ...scrollRevealOption,
  origin: "left",
  delay: 3000,
});ScrollReveal().reveal(".form-section", {
  ...scrollRevealOption,
  origin: "right",
  delay: 3100,
});


document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('satisfactionChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Très satisfait', 'Satisfait', 'Neutre'],
      datasets: [{
        label: 'Retour des clients',
        data: [75, 30, 10],
        backgroundColor: '#2c2724',
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  });
});


  emailjs.init("QqyFjr369B0Zr8Eu5");

  document.getElementById('form').addEventListener('submit', function(event) {
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
        button.disabled = false;  // Re-enable the button
      }, function(error) {
        console.error('Error:', error);
        alert('Une erreur est survenue, veuillez réessayer.');
        button.disabled = false;  // Re-enable the button in case of an error
      });
  });
  

  document.getElementById('scroll-to-form').addEventListener('click', function() {
    document.getElementById('form').scrollIntoView({
      behavior: 'smooth'
    });
  });
   















  