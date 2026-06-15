// =============================
// MARKET BREAKDOWN 5.0
// Premium Landing Page Effects
// =============================

// Fade In Animation

const observer = new IntersectionObserver(
(entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},
{
    threshold: 0.15
}
);

document.querySelectorAll(
".card, .faq-item, .stat, .signal-card, .section h2, .section-text"
).forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Animated Stats

const statNumbers = document.querySelectorAll(".stat h3");

function animateValue(el){

    const text = el.innerText;

    if(text.includes("24/7")) return;
    if(text.includes("Real-Time")) return;
    if(text.includes("Free")) return;
    if(text.includes("XAUUSD")) return;

    let start = 0;
    let end = parseInt(text);

    if(isNaN(end)) return;

    let duration = 1500;
    let increment = end / 60;

    let counter = setInterval(() => {

        start += increment;

        if(start >= end){
            el.innerText = end;
            clearInterval(counter);
        } else {
            el.innerText = Math.floor(start);
        }

    }, duration / 60);
}

const statObserver = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateValue(
                entry.target
            );

        }

    });

},
{
    threshold: 0.4
}
);

statNumbers.forEach(stat => {
    statObserver.observe(stat);
});

// Header Scroll Effect

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,0,0,.85)";

        header.style.borderBottom =
        "1px solid rgba(212,175,55,.15)";

    }
    else{

        header.style.background =
        "rgba(0,0,0,.35)";

    }

});

// Mouse Glow Effect

document.addEventListener("mousemove", (e) => {

    const glow =
    document.querySelector(".gold-glow");

    const x =
    e.clientX / window.innerWidth;

    const y =
    e.clientY / window.innerHeight;

    glow.style.transform =
    `translate(-50%, -50%) translate(${x * 50}px, ${y * 50}px)`;

});

// Smooth Anchor Navigation

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});

// CTA Pulse

setInterval(() => {

    const button =
    document.querySelector(".floating-telegram");

    button.classList.add("pulse");

    setTimeout(() => {
        button.classList.remove("pulse");
    },1000);

},4000);

// Console Branding

console.log(`
======================================
MARKET BREAKDOWN 5.0
Institutional Market Analysis
======================================
`);
