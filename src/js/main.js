"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                // Añade la clase 'slide-in-left' y 'slide-in-top' en cada una de las clases
                // Pagina del index
                // Clase de 'heading-title' del index
                if (target.closest("#heading-title")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 'first-introduction' del index
                else if (target.closest("#first-introduction div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#img-intro")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 'servicios' del index
                else if (target.closest("#servicios div")) {
                    target.classList.add("slide-in-left");
                }
                // Pagina de sobre nosotros
                // Clase de 'sn-intro' de sobre nosotros
                else if (target.closest("#sn-intro div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#sn-intro img")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 'sn-valores' de sobre nosotros
                else if (target.closest("#sn-valores div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#valores div")) {
                    target.classList.add("slide-in-top");
                }
                else if (target.closest("#sn-valores img")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 'sn-equipo' de sobre nosotros
                else if (target.closest("#sn-equipo div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#sn-equipo img")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 'sn-oferta' de sobre nosotros
                else if (target.closest("#sn-oferta div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#sn-oferta img")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 'sn-conecta' de sobre nosotros
                else if (target.closest("#sn-conecta")) {
                    target.classList.add("slide-in-left");
                }
                // Pagina de servicios
                // Clase de 's-intro' de servicios
                else if (target.closest("#s-intro")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 's-dw' de servicios
                else if (target.closest("#s-dw div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-dw img")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 's-cw' de servicios
                else if (target.closest("#s-cw div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-cw img")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 's-pw' de servicios
                else if (target.closest("#s-pw div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-pw img")) {
                    target.classList.add("slide-in-top");
                }
                // Clase de 's-mw' de servicios
                else if (target.closest("#s-mw div")) {
                    target.classList.add("slide-in-left");
                }
                else if (target.closest("#s-mw img")) {
                    target.classList.add("slide-in-top");
                }
                // Pagina de soluciones
                // Clase de 's-inicio' de soluciones
                else if (target.closest("#s-inicio")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 's-p' de soluciones
                else if (target.closest("#s-p")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 's-op' de soluciones
                else if (target.closest("#s-op")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 's-sc' de soluciones
                else if (target.closest("#s-sc")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 's-eu' de soluciones
                else if (target.closest("#s-eu")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 's-ai' de soluciones
                else if (target.closest("#s-ai")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 's-c' de soluciones
                else if (target.closest("#s-c")) {
                    target.classList.add("slide-in-left");
                }
                // Pagina de recursos
                // Clase de 'r-inicio' de recursos
                else if (target.closest("#r-inicio")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 'r-gt' de recursos
                else if (target.closest("#r-gt")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 'r-h' de recursos
                else if (target.closest("#r-h")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 'r-faq' de recursos
                else if (target.closest("#r-faq")) {
                    target.classList.add("slide-in-left");
                }
                // Clase de 'r-cont' de recursos
                else if (target.closest("#r-cont")) {
                    target.classList.add("slide-in-left");
                }
                // Pagina de contacta
                // Clase de 'contacta' de contacta
                else if (target.closest("#contacta")) {
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
    document.querySelectorAll("#first-introduction > div").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#first-introduction > img").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #servicios
    document.querySelectorAll("#servicios > div").forEach((el) => {
        observer.observe(el);
    });
    // Observa todos los elementos dentro de #sn-intro
    document.querySelectorAll("#sn-intro > div").forEach((el) => {
        observer.observe(el);
    });
    document.querySelectorAll("#sn-intro > img").forEach((el) => {
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
