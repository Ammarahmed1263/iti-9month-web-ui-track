const userAgent = window.navigator.userAgent;
console.log("User Agent: ", userAgent);

const isChromium = userAgent.indexOf("Chrome") > -1;
const isEdge = userAgent.indexOf("Edg") > -1;
const isOpera = userAgent.indexOf("OPR") > -1;

setTimeout(() => {
  if (!(isChromium && !isEdge && !isOpera)) {
    alert("Recommendation: Please use Google Chrome.");
  }
}, 2000);

let queryString = window.location.search.substring(1);
let params = queryString.split("&");
let formData = {};

for (let i = 0; i < params.length; i++) {
  if (!params[i]) continue;
  let key = params[i].split("=")[0];
  let value = params[i].split("=")[1];

  formData[key] = decodeURIComponent(value).replace(/\+/g, " ");
}

document.getElementById("dispName").innerText +=
  " Mr." + formData["userName"] + "!";
document.getElementById("dispTitle").innerText = formData["jobTitle"] || "N/A";
document.getElementById("dispEmail").innerText = formData["email"] || "N/A";
document.getElementById("dispMobile").innerText =
  formData["mobileNumber"] || "N/A";
document.getElementById("dispAddress").innerText = formData["address"] || "N/A";
document.getElementById("dispGender").innerText = formData["gender"] || "N/A";

console.log(formData);

console.log("window: ", window);
