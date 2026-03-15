const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const navLinks = document.querySelectorAll(".site-nav a");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
  });
});

async function loadFooter() {
    const response = await fetch("./sections/footer.html");
    const html = await response.text();
    document.getElementById("footer").innerHTML = html;
  }
  
loadFooter();