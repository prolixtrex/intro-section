const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const drpdwnBtn = document.querySelectorAll(".dropdownBtn");
const navItem = document.querySelectorAll(".nav-item");

//dropdown control
const removeClass = (el) => {
    for (let i = 0; i < drpdwnBtn.length; i++) {
        if (el != drpdwnBtn[i]) {
            drpdwnBtn[i].nextElementSibling.classList.remove("active");
            drpdwnBtn[i].classList.remove("active")
            drpdwnBtn[i].parentElement.classList.remove("active")
        }
    }
}

//code for dropdown
for (let i = 0; i < drpdwnBtn.length; i++) {
    drpdwnBtn[i].addEventListener("click", function toggleDropdown() {
        removeClass(this);
        this.classList.toggle("active")
        this.nextElementSibling.classList.toggle("active")
        this.parentElement.classList.toggle("active")
    })
    // drpdwnBtn[i].addEventListener("mouseenter", function toggleDropdown() {
    //     this.nextElementSibling.classList.add("active")
    //     this.parentElement.classList.add("active")
    // })
    // drpdwnBtn[i].addEventListener("mouseleave", function toggleDropdown() {
    //     this.nextElementSibling.classList.remove("active")
    //     this.parentElement.classList.remove("active")
    // })
}


window.onclick = (e) => {
    //hamburger control
    if (e.target.matches(".bar") || e.target.matches(".hamburger")) {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active")
    } else {
        if (e.target.matches(".nav-menu")) {
            hamburger.classList.remove("active")
            navMenu.classList.remove("active")
        }
    }

    //close dropdown when clicked outside the dropdown
    if (!e.target.matches(".dropdownBtn")) {
        for (let i = 0; i < drpdwnBtn.length; i++) {
            drpdwnBtn[i].nextElementSibling.classList.remove("active");
            drpdwnBtn[i].classList.remove("active")
            drpdwnBtn[i].parentElement.classList.remove("active")
        }
    }
}
