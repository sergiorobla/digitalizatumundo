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
                else if (target.closest("#sn-intro")) {
                    target.classList.add("slide-in-bottom");
                }
                else if (target.closest("#sn-valores")) {
                    target.classList.add("slide-in-bottom");
                }
                else if (target.closest("#sn-equipo")) {
                    target.classList.add("slide-in-bottom");
                }
                else if (target.closest("#sn-oferta")) {
                    target.classList.add("slide-in-bottom");
                }
                else if (target.closest("#sn-conecta")) {
                    target.classList.add("slide-in-bottom");
                }
                else if (target.closest("#contacta")) {
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
    // Observa todos los elementos dentro de #heading-title
    document.querySelectorAll("#heading-title > div").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-intro
    document.querySelectorAll("#sn-intro > img").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-intro > div").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-valores
    document.querySelectorAll("#sn-valores > img").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-valores > div h1").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-valores > div p").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#valores > div h3").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#valores > div p").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-equipo
    document.querySelectorAll("#sn-equipo > img").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-equipo > div").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-oferta
    document.querySelectorAll("#sn-oferta > img").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-oferta > div").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-conecta
    document.querySelectorAll("#sn-conecta > img").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-conecta > div").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #contacta
    document.querySelectorAll("#contacta > h1").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#contacta > div").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#contacta > form").forEach((el) => {
        observer.observe(el);
    });
});
