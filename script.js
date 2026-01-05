function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Dark mode */
document.getElementById("darkToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

/* Program Studi */
const prodi = [
    "D4 Pengelolaan Perhotelan",
    "D3 Seni Kuliner",
    "D3 Tata Hidang",
    "D3 Usaha Perjalanan Wisata"
];

const prodiList = document.getElementById("prodiList");
prodi.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = p;
    prodiList.appendChild(div);
});

/* Counter */
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const update = () => {
        const target = +counter.dataset.target;
        const value = +counter.innerText;
        const step = target / 100;
        if (value < target) {
            counter.innerText = Math.ceil(value + step);
            setTimeout(update, 30);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

/* Scroll reveal */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
