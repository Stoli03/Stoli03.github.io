function scrollToForm() {
    const element = document.getElementById("contactFormSection");
    const offset = -250;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

(function () {
    emailjs.init("A0mHTlJjOHo3OfIdO");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_y5izs2n", "template_xdf9qw6", {
        name: name.value,
        email: email.value,
        package: package.value,
        message: message.value
    }).then(() => {
        contactForm.style.display = "none";
        successMessage.style.display = "block";
    });
});

window.addEventListener("load", function() {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookieConsent").style.display = "flex";
    } else {
        enableTracking();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookieConsent");
    const acceptButton = document.getElementById("acceptCookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "flex";
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none"; // Banner verschwindet
        enableTracking(); // Tracking nach Zustimmung laden
    });
});


function enableTracking() {
    if (!window.gtag) {
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-477R5NEW3E";
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'G-477R5NEW3E');
    }
}