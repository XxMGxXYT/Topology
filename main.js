/* Header logo */
let listIcon = document.querySelector(".listIcon");
let list = document.querySelector("header nav");

listIcon.addEventListener("click", function () {
    listIcon.classList.toggle("activeListIcon");
    list.classList.toggle("activeList");
})
/* Header logo */

/* Services section */

let scroll_limit = 150;

// First service
let serv1 = document.querySelector(".servives .serv:nth-child(1)")
let serv1_Container = document.querySelector(".servives .serv:nth-child(1) .container")

// Second service
let serv2 = document.querySelector(".servives .serv:nth-child(2)")
let serv2_Container = document.querySelector(".servives .serv:nth-child(2) .container")

// Third service
let serv3 = document.querySelector(".servives .serv:nth-child(3)")
let serv3_Container = document.querySelector(".servives .serv:nth-child(3) .container")

window.addEventListener("scroll", () => {
    if (window.scrollY > serv1.offsetTop - scroll_limit) {
        // h1 element
        serv1_Container.children[0].style.opacity = 1
        serv1_Container.children[0].style.transform = "unset"
        // img element
        serv1_Container.children[1].style.opacity = 1
        serv1_Container.children[1].style.transform = "unset"
    }
    if (window.scrollY > serv2.offsetTop - scroll_limit) {
        // h1 element
        serv2_Container.children[0].style.opacity = 1
        serv2_Container.children[0].style.transform = "unset"
        // img element
        serv2_Container.children[1].style.opacity = 1
        serv2_Container.children[1].style.transform = "unset"
    }
    if (window.scrollY > serv3.offsetTop - scroll_limit) {
        // h1 element
        serv3_Container.children[0].style.opacity = 1
        serv3_Container.children[0].style.transform = "unset"
        // img element
        serv3_Container.children[1].style.opacity = 1
        serv3_Container.children[1].style.transform = "unset"
    }
})

/* Services section */