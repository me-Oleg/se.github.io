function pagePreloader() {
  setTimeout(() => {
    const mainContent = document.querySelector(".gc-main-content");
    const preloader = document.querySelector(".loader-wrapper");
    mainContent.classList.add("testing");
    mainContent.style.opacity = 1;
    preloader.remove();
  }, 2000);
}

document.addEventListener("DOMContentLoaded", pagePreloader);