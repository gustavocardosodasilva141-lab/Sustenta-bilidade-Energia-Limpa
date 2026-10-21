"use strict";

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    const feedback = document.querySelector("#formFeedback");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        contactForm.classList.add("was-validated");

        if (!contactForm.checkValidity()) {
            feedback.hidden = true;
            contactForm.querySelector(":invalid")?.focus();
            return;
        }

        feedback.textContent =
            "Validação concluída! Esta demonstração não enviou nem armazenou sua mensagem.";
        feedback.hidden = false;
    });
}
