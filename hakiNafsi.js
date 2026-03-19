document
      .getElementById("contactForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const phone = "96171518385";

        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

        this.reset();
      });

    function toggleMenu() {
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("active");
    }
