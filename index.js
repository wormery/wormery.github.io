const host = "119.3.25.172";

const loca = window.location;
let newUrl = loca.href
  .replace(`${loca.host}`, host)
  .replace(`${host}/#`, host)
  .replace("https://", "http://");

const app = document.querySelector("#app");
loca.href = newUrl;
