const img = document.querySelector("img");

img.addEventListener("click", function () {
  const imgContainer = document.getElementById("header");
  const newImageContainer = imgContainer.cloneNode(true);
  const nav = document.getElementById("nav");

  imgContainer.style.textAlign = "right";

  newImageContainer.style.textAlign = "left";
  newImageContainer.id = "footer";
  document.body.insertBefore(newImageContainer, nav.parentElement.nextSibling);

  nav.style.listStyleType = "circle";
  nav.style.listStylePosition = "inside";

  for (let i = 0; i < nav.children.length; i++) {
    nav.children[i].style.color = "purple";
    nav.children[i].style.textDecoration = "underline";
  }
});
