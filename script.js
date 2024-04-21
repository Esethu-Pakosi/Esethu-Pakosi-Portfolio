document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      const mailToLink = `mailto:esethu.pakosi.77@gmail.com?subject=New message from ${name}&body=Email: ${email}%0A%0AMessage:%0A${message}`;

      window.location.href = mailToLink;
  });
});


document.addEventListener("DOMContentLoaded", function() {
    var projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach(function(image) {
        image.addEventListener('mouseenter', function() {
            this.querySelector('.caption').style.display = 'block';
        });

        image.addEventListener('mouseleave', function() {
            this.querySelector('.caption').style.display = 'none';
        });
    });
});


