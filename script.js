// Basic interactivity: menu toggle, form validation, year insert
document.addEventListener('DOMContentLoaded', function(){
  // Insert current year
  const yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if(menuToggle && navList){
    menuToggle.addEventListener('click', function(){
      navList.classList.toggle('show');
    });
    // Close menu when clicking a link (mobile)
    navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('show')));
  }

  // Simple contact form handler (client-side only)
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      formStatus.style.color = 'green';
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      if(!name || !phone || !message){
        formStatus.style.color = 'crimson';
        formStatus.textContent = 'Kripya sabhi fields bharien.';
        return;
      }

      // This demo does not send email from client. We show a success message and prepare a mailto link.
      formStatus.textContent = 'Message tayyar ho gaya — opening email client...';

      const subject = encodeURIComponent('Nisha Food - Contact from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nPhone: ' + phone + '\n\nMessage:\n' + message);
      // Open default mail client with pre-filled content
      window.location.href = `mailto:nburman745@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});