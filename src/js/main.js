"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                // Añade la clase 'slide-in-right' a todos los elementos dentro de #servicios
                if (target.closest("#servicios")) {
                    target.classList.add("slide-in-bottom");
                }
                else if (target.tagName === "IMG" || "DIV") {
                    target.classList.add("slide-in-bottom");
                }
                else if (target.closest("#heading-title")) {
                    target.classList.add("slide-in-bottom");
                }
                observer.unobserve(target);
            }
        });
    }, { threshold: [0.1] });
    // Observa todos los elementos dentro de #first-introduction
    document.querySelectorAll("#first-introduction > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #servicios
    document.querySelectorAll("#servicios > div").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#heading-title > div").forEach((el) => {
        observer.observe(el);
    });
});
