// function myFunction() {
//     let menu = document.getElementsByClassName("nav-list")[0];
//     if (menu.style.display === "block") {
//       menu.style.display = "none";
//     } else {
//       menu.style.display = "block";
//     }
//   }





let menu = document.getElementsByClassName("nav-list")[0];
let hamburger = document.getElementsByClassName("hamburger")[0];

hamburger.addEventListener("click", function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
})



