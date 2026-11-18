const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formSuccess.classList.add("show");
        contactForm.reset();

        formSuccess.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
}