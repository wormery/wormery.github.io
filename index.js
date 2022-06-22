const host = "119.3.25.172";

const loca = window.location;
let newUrl = loca.href.replace(`${loca.host}`, host).replace(`${host}/#`, host);

const app = document.querySelector("#app");
app.src = newUrl;

window.location.hash = "";
