"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                // Añade la clase 'slide-in-left' a todos los elementos dentro de #servicios
                if (target.closest("#heading-title")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#first-introduction")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#servicios")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#sn-intro")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#sn-valores")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#valores")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#sn-equipo")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#sn-oferta")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#sn-conecta")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#contacta")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-intro")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-dw")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-cw")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-pw")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-mw")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-inicio")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-p")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-op")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-sc")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-eu")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-ai")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-c")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#r-inicio")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#r-gt")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#r-h")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#r-faq")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#r-cont")) {
                    target.classList.add("slide-in-left");
                }
                observer.unobserve(target);
            }
        });
    }, { threshold: [0.1] });
    // Observa todos los elementos dentro de #heading-title
    document.querySelectorAll("#heading-title > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #first-introduction
    document.querySelectorAll("#first-introduction > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #servicios
    document.querySelectorAll("#servicios > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-intro
    document.querySelectorAll("#sn-intro > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-valores
    document.querySelectorAll("#sn-valores > img").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-valores > div > h1").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-valores > div > p").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-valores > div > #valores").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-equipo
    document.querySelectorAll("#sn-equipo > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-oferta
    document.querySelectorAll("#sn-oferta > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-conecta
    document.querySelectorAll("#sn-conecta > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #contacta
    document.querySelectorAll("#contacta > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-intro
    document.querySelectorAll("#s-intro > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-dw
    document.querySelectorAll("#s-dw > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-cw
    document.querySelectorAll("#s-cw > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-dw
    document.querySelectorAll("#s-pw > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-dw
    document.querySelectorAll("#s-mw > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-inicio
    document.querySelectorAll("#s-inicio > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-p
    document.querySelectorAll("#s-p > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-op
    document.querySelectorAll("#s-op > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-sc
    document.querySelectorAll("#s-sc > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-eu
    document.querySelectorAll("#s-eu > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-ai
    document.querySelectorAll("#s-ai > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #s-c
    document.querySelectorAll("#s-c > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #r-inicio
    document.querySelectorAll("#r-inicio > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #r-gt
    document.querySelectorAll("#r-gt > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #r-h
    document.querySelectorAll("#r-h > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #r-faq
    document.querySelectorAll("#r-faq > *").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #r-cont
    document.querySelectorAll("#r-cont > *").forEach((el) => {
        observer.observe(el);
    });
});
