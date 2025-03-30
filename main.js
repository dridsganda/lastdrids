const menuBtn = document.getElementById("menubtn"); 
const navLinks = document.getElementById("check");
const menuBtnIcon = document.querySelector("#menubtn i");

const homeLink = document.querySelector('a[href="#home"]');
const aboutLink = document.querySelector('a[href="#about"]');
const profileLink = document.querySelector('a[href="#profile"]'); 
const favoritesLink = document.querySelector('a[href="#favorites"]');
const educationLink = document.querySelector('a[href="#educback"]');

const homeSection = document.getElementById("home"); 
const aboutSection = document.getElementById("about"); 
const profileSection = document.getElementById("profile");
const favoritesSection = document.getElementById("favorites");
const educationSection = document.getElementById("educback");

function showSection(section) {
    [homeSection, aboutSection, profileSection, favoritesSection, educationSection].forEach(sec => {
        sec.style.display = sec === section ? "block" : "none";
    });

    closeMenu();
}

function closeMenu() {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
}

showSection(homeSection);

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

[homeLink, aboutLink, profileLink, favoritesLink, educationLink].forEach(link => {
    if (link) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = document.getElementById(link.getAttribute("href").substring(1));
            if (section) showSection(section);
        });
    }
});

document.addEventListener("play", function(event) {
    let audios = document.querySelectorAll(".audio");
    audios.forEach(audio => {
        if (audio !== event.target) {
            audio.pause(); 
            audio.currentTime = 0; 
        }
    });
}, true);
