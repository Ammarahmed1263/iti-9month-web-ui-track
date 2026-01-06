const IMAGES = {
  male: "images/1.jpg",
  female: "images/2.jpg",
};
const genderImage = document.getElementById("gender-image");
const nameSpan = document.getElementById("userName");
const visitSpan = document.getElementById("visits");

try {
  if (!hasCookie("userName") || !hasCookie("visits")) {
    throw new Error("No profile data found. Please register first.");
  }

  const name = getCookie("userName");
  const visits = getCookie("visits");
  const gender = getCookie("gender");
  const favColor = getCookie("favColor");

  if (gender && IMAGES[gender]) {
    genderImage.src = IMAGES[gender];
  } else {
    genderImage.alt = "No Gender Selected";
  }

  nameSpan.innerHTML = name;
  nameSpan.style.color = favColor;

  visitSpan.innerHTML = visits;
  visitSpan.style.color = favColor;
} catch (e) {
  console.error(e);

  if (e.name === "ReferenceError") {
    document.getElementsByTagName(
      "h1"
    )[0].innerHTML = `Error: Cookie data missing.`;
  } else {
    document.getElementsByTagName("h1")[0].innerHTML = `${e.message}`;
  }
}
