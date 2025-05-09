if (window.location.href.indexOf('/fileservice/control/account/storage') > -1 || window.location.href.indexOf('/fileservice/control/account/video') > -1) {
  $(function () {
    $('#w5-container table tr').each(function (i, row) {
      let filetype = $(row).find("td:nth-child(4)").text().trim();
      let filelink = $(row).find("td:nth-child(3) a").attr("href");
      if (["изображение", "image"].indexOf(filetype) > -1) {
        let regex = /(.*)\/fileservice\/file\/download(?:\/.*\/)(\d*)\/.*\/(\d*)\/.*\/((?:.*)\w{32}[^\/]*)/gm;
        let thumb_subst = `$1/fileservice/file/thumbnail/h/$4/s/200x/a/$2/sc/$3`;
        let thumb_img = filelink.replace(regex, thumb_subst);
        $(row).find("td:nth-child(3)").append('<img src="' + thumb_img + '" style="display:block;" />');
      } else if (["видео", "video"].indexOf(filetype) > -1 || !isNaN(parseInt(filetype))) {
        $(row).find("td:nth-child(3)").append('<video controls src="' + filelink + '" style="display:block;width:200px;height:112px;" />');
      }
    });
  });
}
//----------------
!function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1742702732545488');
fbq('init', '357897065657309');
fbq('track', 'PageView');
//----------------
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-ZGF6ZCMDGN');
//----------------
(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
  m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(56062408, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
});
//----------------
var gl_id = '1fc8c05bb370b58b0a41b3ca4659887e';
if ((window.userInfo.isAdmin || window.userInfo.isManager || window.userInfo.isTeacher) && window.userInfo.isInAccount)
var script = document.createElement('script'); script.src = 'https://getloo.ru/pixel/whatsapp/' + gl_id; script.defer = true; $(document).ready(function () { document.body.appendChild(script); });