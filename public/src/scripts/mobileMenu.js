function addMobileIcon() {
  const nativeMenu = document.querySelector(".gc-account-leftbar");
  const customMenu = document.querySelector(".custom-menu");

  setTimeout(() => {
    if (window.innerWidth <= 768) {
      const menuSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;" xml:space="preserve" width="30" height="30"><g><path d="M469.333,224h-448C9.551,224,0,233.551,0,245.333c0,11.782,9.551,21.333,21.333,21.333h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,233.551,481.115,224,469.333,224z"/><path d="M21.333,117.333h448c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551,74.667,0,84.218,0,96   S9.551,117.333,21.333,117.333z"/><path d="M469.333,373.333h-448C9.551,373.333,0,382.885,0,394.667C0,406.449,9.551,416,21.333,416h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,382.885,481.115,373.333,469.333,373.333z"/></g></svg>`;
      const closeSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 511.991 511.991" style="enable-background:new 0 0 511.991 511.991;" xml:space="preserve" height="30" width="30"><g><path d="M286.161,255.867L505.745,36.283c8.185-8.474,7.951-21.98-0.523-30.165c-8.267-7.985-21.375-7.985-29.642,0   L255.995,225.702L36.411,6.118c-8.475-8.185-21.98-7.95-30.165,0.524c-7.985,8.267-7.985,21.374,0,29.641L225.83,255.867   L6.246,475.451c-8.328,8.331-8.328,21.835,0,30.165l0,0c8.331,8.328,21.835,8.328,30.165,0l219.584-219.584l219.584,219.584   c8.331,8.328,21.835,8.328,30.165,0l0,0c8.328-8.331,8.328-21.835,0-30.165L286.161,255.867z"/></g></svg>`
  
      customMenu.classList.add("mobile-menu");
  
      const mobileWrapper = document.createElement("div");
      const mobileIcon = document.createElement("div");
  
      mobileIcon.innerHTML = `<a href="javascript:void(0);">${menuSVG}</a>`;
  
      mobileIcon.classList.add("mobile-icon");
      mobileWrapper.classList.add("mobile-wrapper");
      
      nativeMenu.prepend(mobileWrapper);
      mobileWrapper.appendChild(mobileIcon);
      mobileWrapper.appendChild(customMenu);
  
      mobileIcon.addEventListener("click", () => {
        mobileWrapper.classList.toggle("collapsed");
        mobileWrapper.classList.contains("collapsed") ? mobileIcon.innerHTML = `<a href="javascript:void(0);">${closeSVG}</a>` : mobileIcon.innerHTML = `<a href="javascript:void(0);">${menuSVG}</a>`;
      });
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", addMobileIcon);