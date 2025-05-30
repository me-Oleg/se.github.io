document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 768;
  deleteDot();
  initMenu();
  addMenuToggle();
  pagePreloader();
  setBiggerMessage();
  if (isMobile) {
    addMobileIcon();
  }
});

function pagePreloader() {
  setTimeout(() => {
    const mainContent = document.querySelector(".gc-main-content");
    const preloader = document.querySelector(".loader-container");
    mainContent.classList.add("show");
    mainContent.style.opacity = 1;
    preloader.remove();
  }, 1000);
}

function setBiggerMessage() {
  const url = window.location.href;
  if(url.includes("/webinar")) {
    const input = document.querySelector("input.new-comment-input");
    return input.maxLength = 1000;
  }
}

function initMenu() {
  const nativeMenu = document.querySelector(".gc-account-leftbar");
  const mainContent = document.querySelector(".gc-main-content");

  const menuItems = {
    admin: [
      {
        name: "Профиль",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="17" height="17"><g><circle cx="256" cy="128" r="128"/><path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/></g></svg>`,
        submenu: [
          { name: "Посмотреть профиль", link: "/user/my/profile" },
          { name: "Изменить пароль", link: "/user/my/changePassword" },
          { name: "Уведомления", link: "/pl/notifications/settings/my" },
          { name: "Прием платежей", link: "/saas/account/paymentsSettings" },
          { name: "Настройки аккаунта", link: "/pl/saas/account/show" },
          { name: "Хранилище", link: "/pl/fileindex/file/index" },
          { name: "Поддержка ГК", link: "/pl/notifications/support" }
        ],
      },
      {
        name: "Сайт",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" height="17" width="17"><g><path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z"/><g><path d="M362.667,383.841v128H448c35.346,0,64-28.654,64-64V253.26c0.005-11.083-4.302-21.733-12.011-29.696l-181.29-195.99    c-31.988-34.61-85.976-36.735-120.586-4.747c-1.644,1.52-3.228,3.103-4.747,4.747L12.395,223.5    C4.453,231.496-0.003,242.31,0,253.58v194.261c0,35.346,28.654,64,64,64h85.333v-128c0.399-58.172,47.366-105.676,104.073-107.044    C312.01,275.383,362.22,323.696,362.667,383.841z"/><path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z"/></g></g></svg>`,
        submenu: [
          { name: "Страницы", link: "/pl/cms/page" },
          { name: "Виджеты", link: "/cms/control/xdget"},
          { name: "Вебинары", link: "/pl/webinar/control/index" },
          { name: "Трафик", link: "/pl/metrika/traffic" }
        ],
      },
      {
        name: "Курсы",
        link: "#",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z"/></svg>`,
        submenu: [
          { name: "Курсы", link: "/teach/control/stream" },
          { name: "Расписание", link: "/pl/teach/control/schedule" },
          { name: "Ответы", link: "/teach/control/answers/unanswered" },
          { name: "Тесты", link: "/pl/teach/questionary" },
          { name: "Дипломы", link: "/pl/teach/control/diploma" },
          { name: "Цели", link: "/pl/teach/goal" },
          { name: "Контоль качества", link: "/teach/control/stat/userTrainingFeedback" },
          { name: "Поиск", link: "/c/s/search" }
        ],
      },
      {
        name: "Ученики",
        link: "#",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm6.5 11h-13a1 1 0 0 1 -1-1v-.5a7.5 7.5 0 0 1 15 0v.5a1 1 0 0 1 -1 1zm3.5-15a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm-1.421 2.021a6.825 6.825 0 0 0 -4.67 2.831 9.537 9.537 0 0 1 4.914 5.148h6.677a1 1 0 0 0 1-1v-.038a7.008 7.008 0 0 0 -7.921-6.941z"/></svg>`,
        submenu: [
          { name: "Списки", link: "/pl/user/user/index" },
          { name: "Звонки и встречи", link: "/pl/user/contact/index" },
          { name: "Дашборды", link: "/pl/logic/funnel" },
          { name: "Статистика", link: "/user/control/user/statistic" },
          { name: "Настройки", link: "/pl/user/settings" }
        ],
      },
      {
        name: "CRM",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path d="M22.5,3.976H19.414a1,1,0,0,0-.707,1.707l1.086,1.086h0l-3.586,3.585a1.024,1.024,0,0,1-1.415,0l-.17-.171a3.071,3.071,0,0,0-4.243,0l-5.1,5.1A1,1,0,1,0,6.7,16.7l5.1-5.1a1.023,1.023,0,0,1,1.415,0l.17.171a3.073,3.073,0,0,0,4.243,0l3.586-3.586h0l1.086,1.086A1,1,0,0,0,24,8.562V5.476A1.5,1.5,0,0,0,22.5,3.976Z"/><path d="M23,21.976H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V18.976a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z"/></svg>`,
        submenu: [
          { name: "Доска заказов", link: "/pl/tasks/task/kanban/deals" },
          { name: "Доска задач", link: "/pl/tasks/task/kanban/tasks/kanban" },
          { name: "Списки задач", link: "/pl/tasks/task/kanban/tasks/list" },
          { name: "Процессы", link: "/pl/tasks/mission/index" },
          { name: "Статистика", link: "/pl/tasks/task/stat" },
          { name: "Мои задачи", link: "/pl/tasks/task/my" }
        ],
      },
      {
        name: "Сообщения",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"/><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"/></svg>`,
        submenu: [
          { name: "Входящие", link: "/pl/tasks/resp" },
          { name: "Рассылки", link: "/notifications/control/mailings" },
          { name: "Настройки", link: "/pl/notifications/control/account-settings" },
          { name: "Шаблоны", link: "/pl/notifications/control/mailings/templates-list" },
          { name: "VK", link: "/pl/vk/control/themes" },
          { name: "WhatsApp", link: "/pl/whatsapp/control/bots" },
          { name: "Telegram", link: "/pl/telegram/control/bots" },
          { name: "Viber", link: "/pl/viber/control/bots" },
          { name: "Отчеты", link: "/pl/user/employers-stat/index" }
        ],
      },
      {
        name: "Покупки",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path d="M24,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>`,
        submenu: [
          { name: "Доска заказов", link: "/pl/tasks/task/kanban/deals" },
          { name: "Список заказов", link: "/sales/default/deals" },
          { name: "Продукты", link: "/pl/sales/product/index" },
          { name: "Партнерская программа", link: "/sales/control/participant" },
          { name: "Статистика", link: "/pl/sales/dealstat/index" },
          { name: "Мои покупки", link: "/sales/control/userProduct/my" },
          { name: "Промоакции", link: "/pl/sales/promo" },
          { name: "Потоки", link: "/pl/sales/stream/stream-stat" },
          { name: "Платежный модуль", link: "/pl/gcpay/client/payment" }
        ]
      }
    ],
    teacher: [
      {
        name: "Профиль",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="17" height="17"><g><circle cx="256" cy="128" r="128"/><path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/></g></svg>`,
        submenu: [
          { name: "Посмотреть профиль", link: "/user/my/profile" },
          { name: "Изменить пароль", link: "/user/my/changePassword" },
          { name: "Уведомления", link: "/pl/notifications/settings/my" },
          { name: "Поддержка ГК", link: "/pl/notifications/support" }
        ]
      },
      {
        name: "Сайт",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" height="17" width="17"><g><path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z"/><g><path d="M362.667,383.841v128H448c35.346,0,64-28.654,64-64V253.26c0.005-11.083-4.302-21.733-12.011-29.696l-181.29-195.99    c-31.988-34.61-85.976-36.735-120.586-4.747c-1.644,1.52-3.228,3.103-4.747,4.747L12.395,223.5    C4.453,231.496-0.003,242.31,0,253.58v194.261c0,35.346,28.654,64,64,64h85.333v-128c0.399-58.172,47.366-105.676,104.073-107.044    C312.01,275.383,362.22,323.696,362.667,383.841z"/><path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z"/></g></g></svg>`,
        submenu: [
          { name: "Страницы", link: "/pl/cms/page" },
          { name: "Виджеты", link: "/cms/control/xdget"},
          { name: "Вебинары", link: "/pl/webinar/control/index" }
        ],
      },
      {
        name: "Курсы",
        link: "#",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z"/></svg>`,
        submenu: [
          { name: "Курсы", link: "/teach/control/stream" },
          { name: "Расписание", link: "/pl/teach/control/schedule" },
          { name: "Ответы", link: "/teach/control/answers/unanswered" },
          { name: "Тесты", link: "/pl/teach/questionary" },
          { name: "Дипломы", link: "/pl/teach/control/diploma" },
          { name: "Цели", link: "/pl/teach/goal" },
          { name: "Контоль качества", link: "/teach/control/stat/userTrainingFeedback" },
          { name: "Поиск", link: "/c/s/search" }
        ],
      },
      {
        name: "Ученики",
        link: "#",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm6.5 11h-13a1 1 0 0 1 -1-1v-.5a7.5 7.5 0 0 1 15 0v.5a1 1 0 0 1 -1 1zm3.5-15a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm-1.421 2.021a6.825 6.825 0 0 0 -4.67 2.831 9.537 9.537 0 0 1 4.914 5.148h6.677a1 1 0 0 0 1-1v-.038a7.008 7.008 0 0 0 -7.921-6.941z"/></svg>`,
        submenu: [
          { name: "Списки", link: "/pl/user/user/index" },
          { name: "Звонки и встречи", link: "/pl/user/contact/index" },
          { name: "Дашборды", link: "/pl/logic/funnel" },
          { name: "Статистика", link: "/user/control/user/statistic" },
          { name: "Настройки", link: "/pl/user/settings" }
        ],
      },
      {
        name: "CRM",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path d="M22.5,3.976H19.414a1,1,0,0,0-.707,1.707l1.086,1.086h0l-3.586,3.585a1.024,1.024,0,0,1-1.415,0l-.17-.171a3.071,3.071,0,0,0-4.243,0l-5.1,5.1A1,1,0,1,0,6.7,16.7l5.1-5.1a1.023,1.023,0,0,1,1.415,0l.17.171a3.073,3.073,0,0,0,4.243,0l3.586-3.586h0l1.086,1.086A1,1,0,0,0,24,8.562V5.476A1.5,1.5,0,0,0,22.5,3.976Z"/><path d="M23,21.976H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V18.976a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z"/></svg>`,
        submenu: [
          { name: "Доска заказов", link: "/pl/tasks/task/kanban/deals" },
          { name: "Доска задач", link: "/pl/tasks/task/kanban/tasks/kanban" },
          { name: "Списки задач", link: "/pl/tasks/task/kanban/tasks/list" },
          { name: "Процессы", link: "/pl/tasks/mission/index" },
          { name: "Статистика", link: "/pl/tasks/task/stat" },
          { name: "Мои задачи", link: "/pl/tasks/task/my" }
        ],
      },
      {
        name: "Сообщения",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"/><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"/></svg>`,
        submenu: [
          { name: "Входящие", link: "/pl/tasks/resp" },
          { name: "Рассылки", link: "/notifications/control/mailings" },
          { name: "Настройки", link: "/pl/notifications/control/account-settings" },
          { name: "Отчеты", link: "/pl/user/employers-stat/index" }
        ],
      },
      {
        name: "Покупки",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path d="M24,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>`,
        submenu: [
          { name: "Доска заказов", link: "/pl/tasks/task/kanban/deals" },
          { name: "Список заказов", link: "/sales/default/deals" },
          { name: "Продукты", link: "/pl/sales/product/index" },
          { name: "Партнерская программа", link: "/sales/control/participant" },
          { name: "Статистика", link: "/pl/sales/dealstat/index" },
          { name: "Мои покупки", link: "/sales/control/userProduct/my" },
          { name: "Промоакции", link: "/pl/sales/promo" },
          { name: "Потоки", link: "/pl/sales/stream/stream-stat" }
        ],
      }
    ],
    user: [
      {
        name: "Профиль",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="17" height="17"><g><circle cx="256" cy="128" r="128"/><path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/></g></svg>`,
        submenu: [
          { name: "Посмотреть профиль", link: "/user/my/profile" },
          { name: "Изменить пароль", link: "/user/my/changePassword" },
          { name: "Уведомления", link: "/pl/notifications/settings/my" },
          { name: "Выйти из аккаунта", link: "/user/my/logout" }
        ]
      },
      {
        name: "Курсы",
        link: "#",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z"/></svg>`,
        submenu: [
          { name: "Курсы", link: "/teach/control/stream" },
          { name: "Расписание", link: "/pl/teach/control/schedule" },
          { name: "Ответы", link: "/teach/control/answers/my" },
          { name: "Тестирования", link: "/user/control/user/questionary" },
          { name: "Поиск", link: "/c/s/search" }
        ],
      },
      {
        name: "Сообщения",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"/><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"/></svg>`,
        submenu: [
          { name: "Сообщения", link: "/pl/talks/conversation" }
        ],
      },
      {
        name: "Покупки",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path d="M24,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>`,
        submenu: [
          { name: "Мои покупки", link: "/sales/control/userProduct/my" }
        ],
      }
    ],
  };

  let currentMenu = [];

  if (mainContent.classList.contains("gc-user-admin")) {
    currentMenu = menuItems.admin;
  } else if (mainContent.classList.contains("gc-user-teacher")) {
    currentMenu = menuItems.teacher;
  } else if (mainContent.classList.contains("gc-user-user")) {
    currentMenu = menuItems.user;
  }

  const generateMenuHTML = (items) => {
    return items.map(item => {
      const submenuHTML = item.submenu ? `<ul class="custom-submenu">${generateSubmenuHTML(item.submenu)}</ul>` : '';
      return `
      <li class="custom-menu-item">
        <div class="menu-item-wrapper">
          <a href="javascript:void(0);" class="menu-item-point">
            <span class="menu-item-img">${item.icon}</span>
            <div class="menu-item-name">${item.name}</div>  
          </a>
        </div>
        ${submenuHTML}
      </li>`;
    }).join('');
  };

  const generateSubmenuHTML = (items) => {
    return items.map(item => {
      return `
        <li class="custom-submenu-item">
          <a href="${item.link}" class="submenu-item-wrapper" target="_self">${item.name}</a>
        </li>`;
    }).join('');
  };

  nativeMenu.innerHTML = `<ul class="custom-menu">${generateMenuHTML(currentMenu)}</ul>`;
  const menuItemsElements = nativeMenu.querySelectorAll('.custom-menu-item');

  menuItemsElements.forEach(item => {
    item.addEventListener('click', function (event) {
      const submenu = this.querySelector('.custom-submenu');
      const isVisible = submenu && submenu.classList.contains('visible');
  
      menuItemsElements.forEach(elem => elem.classList.remove('active'));
      const allSubmenus = nativeMenu.querySelectorAll('.custom-submenu');
      allSubmenus.forEach(sub => sub.classList.remove('visible'));
  
      if (submenu) {
        if (!isVisible) {
          item.classList.add('active');
          submenu.classList.add('visible');
        }
      }
    })
  });
}

function addMobileIcon() {
  const nativeMenu = document.querySelector(".gc-account-leftbar");
  const customMenu = document.querySelector(".custom-menu");

  const menuSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;" xml:space="preserve" width="30" height="30"><g><path d="M469.333,224h-448C9.551,224,0,233.551,0,245.333c0,11.782,9.551,21.333,21.333,21.333h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,233.551,481.115,224,469.333,224z"/><path d="M21.333,117.333h448c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551,74.667,0,84.218,0,96   S9.551,117.333,21.333,117.333z"/><path d="M469.333,373.333h-448C9.551,373.333,0,382.885,0,394.667C0,406.449,9.551,416,21.333,416h448   c11.782,0,21.333-9.551,21.333-21.333C490.667,382.885,481.115,373.333,469.333,373.333z"/></g></svg>`;
  const closeSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 511.991 511.991" style="enable-background:new 0 0 511.991 511.991;" xml:space="preserve" height="30" width="30"><g><path d="M286.161,255.867L505.745,36.283c8.185-8.474,7.951-21.98-0.523-30.165c-8.267-7.985-21.375-7.985-29.642,0   L255.995,225.702L36.411,6.118c-8.475-8.185-21.98-7.95-30.165,0.524c-7.985,8.267-7.985,21.374,0,29.641L225.83,255.867   L6.246,475.451c-8.328,8.331-8.328,21.835,0,30.165l0,0c8.331,8.328,21.835,8.328,30.165,0l219.584-219.584l219.584,219.584   c8.331,8.328,21.835,8.328,30.165,0l0,0c8.328-8.331,8.328-21.835,0-30.165L286.161,255.867z"/></g></svg>`;

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
    mobileIcon.innerHTML = `<a href="javascript:void(0);">${mobileWrapper.classList.contains("collapsed") ? closeSVG : menuSVG}</a>`;
  });
}

function addMenuToggle() {
  const nativeMenu = document.querySelector(".gc-account-leftbar");
  const customMenu = document.querySelector(".custom-menu");
  const menuNames = Array.from(document.querySelectorAll(".menu-item-name"));
  const menuToggleSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><g><path d="M23,16H2.681l.014-.015L4.939,13.7a1,1,0,1,0-1.426-1.4L1.274,14.577c-.163.163-.391.413-.624.676a2.588,2.588,0,0,0,0,3.429c.233.262.461.512.618.67l2.245,2.284a1,1,0,0,0,1.426-1.4L2.744,18H23a1,1,0,0,0,0-2Z"/><path d="M1,8H21.255l-2.194,2.233a1,1,0,1,0,1.426,1.4l2.239-2.279c.163-.163.391-.413.624-.675a2.588,2.588,0,0,0,0-3.429c-.233-.263-.461-.513-.618-.67L20.487,2.3a1,1,0,0,0-1.426,1.4l2.251,2.29L21.32,6H1A1,1,0,0,0,1,8Z"/></g></svg>`;
  
  const menuToggleWrapper = document.createElement("div");
  menuToggleWrapper.classList.add("menu-toggle-wrapper");
  menuToggleWrapper.innerHTML = `<a href="javascript:void(0);" class="menu-toggle-button">${menuToggleSVG}</a>`;
  customMenu.prepend(menuToggleWrapper);
  
  const menuState = JSON.parse(localStorage.getItem('menuState')) || {};

  const mainContent = document.querySelector(".gc-main-content.with-left-menu");

  if (menuState.menuToggled) {
    nativeMenu.classList.add("toggled");
    menuNames.forEach(item => item.classList.add("disabled"));
    mainContent.classList.add("short");
  }

  document.querySelector(".menu-toggle-button").addEventListener("click", () => {
    nativeMenu.classList.toggle("toggled");
    menuNames.forEach(item => item.classList.toggle("disabled"));
    menuState.menuToggled = nativeMenu.classList.contains("toggled");
    localStorage.setItem('menuState', JSON.stringify(menuState));

    if (nativeMenu.classList.contains("toggled")) {
      mainContent.classList.add("short");
    } else {
      mainContent.classList.remove("short");
    }
  });
}

function deleteDot() {
  document.querySelectorAll(".stream-table tbody tr td a > div > b").forEach(item => item.textContent = item.textContent.replace(".", ""));
}