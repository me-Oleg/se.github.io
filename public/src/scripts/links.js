const links = document.getElementsByTagName("a");
Array.from(links).forEach(link => {
  if (link.href.indexOf("anettaschool.ru") > 0 && link.href.indexOf("#") < 0) {
    link.href += location.search;
  }
});