"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (target.tagName === "IMG") {
                    target.classList.add("slide-in-right");
                }
                else {
                    target.classList.add("slide-in-left");
                }
                observer.unobserve(target);
            }
        });
    }, { threshold: [0.1] });
    document.querySelectorAll("#first-introduction > *").forEach((el) => {
        observer.observe(el);
    });
});
