const myNav = document.getElementById("mySideNav");
const overlay = document.getElementById("overlay");

const openNav = () => {
    myNav.classList.add("is-open");
    overlay.style.display = "block";
}

const closeNav = () => {
    myNav.classList.remove("is-open");
    overlay.style.display = "none";
}