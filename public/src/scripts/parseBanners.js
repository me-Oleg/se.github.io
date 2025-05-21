const setBanner = (() => {
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
		const lessonList = document.querySelector(".lesson-list");
		const streamTable = document.querySelector(".stream-table");

		if (!lessonList && !streamTable) {
			console.error("Нет элементов");
			return;
		}

		try {
			const container = document.createElement("div");
			container.classList.add("banner-wrapper");
			const bannerData = await fetchBannersData();
			const parser = new DOMParser();
			const doc = parser.parseFromString(bannerData, "text/html");
			const bannersElements = Array.from(doc.querySelectorAll(".banner-item"));

			bannersElements.forEach((banner) => {
				container.appendChild(banner);
			});

			if (lessonList) {
				lessonList.prepend(container);
			} else if (streamTable) {
				streamTable.prepend(container);
			}
		} catch (error) {
			console.error("Ошибка getBanners: ", error);
		}
	};

	const rotateBanners = () => {
		const bannerWrapper = document.querySelector(".banner-wrapper");
		const banners = Array.from(bannerWrapper.querySelectorAll(".banner-item"));

		if (banners.length === 0) return;

		let lastBanner = banners.shift();

		banners.push(lastBanner);
		bannerWrapper.innerHTML = "";
		banners.forEach(banner => bannerWrapper.append(banner));
	};

	return { 
		get: getBanners,
		rotate: rotateBanners
	};
})();


document.addEventListener("DOMContentLoaded", () => {
	setBanner.get;
	setInterval(() => setBanner.rotate, 7000);
});