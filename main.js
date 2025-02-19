let listIcon = document.querySelector(".listIcon");
let list = document.querySelector("header nav");

listIcon.addEventListener("click", function () {
    listIcon.classList.toggle("activeListIcon");
    list.classList.toggle("activeList");
})
