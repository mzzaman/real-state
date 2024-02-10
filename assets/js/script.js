"use stric";
// Navbar toggle in Mobile View

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

console.log($navbar);
console.log($navToggler);

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/*
Header Scroll state
*/

const $header = document.querySelector("[data-header]");
console.log($header);
$header.addEventListener("scroll", (e) => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/*
 * Add to favorite button toggle
 */

const $toggleBtns = document.querySelectorAll("[data-toggle-btn");
$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });
});
