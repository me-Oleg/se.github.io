setTimeout(async () => {
  let today = new Date().toISOString().split('T')[0];
  let storageKey = 'disabled-element-created';
  let url = 'https://anettaschool.ru/user/my/profile';
  let storedData = localStorage.getItem(storageKey);
  if (storedData !== today) {
    try {
      let response = await fetch(url);
      let html = await response.text();
      let doc = new DOMParser().parseFromString(html, 'text/html');
      let selectElement = doc.getElementById('User_subscribe_status');
      let selectedValue = selectElement.options[selectElement.selectedIndex].value;
      if (selectedValue !== 'all') {
        let userId = await getUserId(doc);
        let message = `
          <div class="alert-message">
            <span class="alert-message-close">+</span>
            <p class="alert-message-title">Важное напоминание!</p>
            <p class="alert-message-text">Вы отписаны от рассылок и пропускаете важные уведомления и новости.</p>
            <a href="${url}" class="alert-message-link">Подписаться</a>
          </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', message);
        document.querySelector('.alert-message-close').addEventListener('click', async () => {
          document.querySelector('.alert-message').remove();
          await sendDataToSheets('close', today, userId);
        });
        document.querySelector('.alert-message-link').addEventListener('click', async (e) => {
          e.preventDefault();
          document.querySelector('.alert-message').remove();
          await sendDataToSheets('click', today, userId);
          window.location.href = url;
        });
        localStorage.setItem(storageKey, today);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  async function getUserId(doc) {
    let elemId = doc.querySelector(".page-header .btn-link").getAttribute("onclick");
    let regex = /\/pl\/(\d+)/;
    let match = elemId.match(regex);
    return match[1];
  }
  async function sendDataToSheets(action, date, userId) {
    let urlScript = "https://script.google.com/macros/s/AKfycbymKd-ooXw3hjPO7TV8Hfjunq33dOMqFnsUwnwNDguzCrBbA6jsuwN6ikfhruNuStUbOg/exec";
    try {
      let response = await fetch(urlScript + `?userId=${userId}&date=${date}&action=${action}`, { mode: "cors" });
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
}, 10000);