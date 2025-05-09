const setBanner = (function () {
  const url = "https://anettaschool.ru/banners-page";

  async function fetchBannersData() {
    try {
      const response = await fetch(url);
      return await response.text();
    } catch (error) {
      console.error("Отсутствуют данные: ", error);
      throw error;
    }
  }

  async function getBanners() {
    const lessonList = document.querySelector(".xdget-lessonList");
    const streamTable = document.querySelector(".stream-table");

    if (!lessonList && !streamTable) {
      console.error("Нет элементов");
      return;
    }

    try {
      const container = document.createElement("div");
      const bannerData = await fetchBannersData();
      const parser = new DOMParser();
      const doc = parser.parseFromString(bannerData, "text/html");
      const bannersElements = Array.from(doc.querySelectorAll(".banner-item"));

      let count = 0;

      container.classList.add("banner-wrapper");

      bannersElements.forEach((banner) => {
        container.appendChild(banner);
      });

      lessonList ? lessonList.prepend(container) : streamTable.append(container);

      function rotateBanner() {
        const lastBanner = bannersElements.pop();
        bannersElements.unshift(lastBanner);
        container.innerHTML = "";

        bannersElements.forEach((banner) => {
          container.appendChild(banner);
          banner.classList.toggle("active-banner");
        });

        count = ++count % bannersElements.length;

        setTimeout(() => { 
          bannersElements.forEach((banner) => {
            banner.classList.toggle("active-banner");
          });
        }, 4000);
      }

      setInterval(rotateBanner, 8000);
    } catch (error) {
      console.error("Ошибка getBanners: ", error);
    }
  }
  return { init: getBanners }
})();

document.addEventListener("DOMContentLoaded", setBanner.init);