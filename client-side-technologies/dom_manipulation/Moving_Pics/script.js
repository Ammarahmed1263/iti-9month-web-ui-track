const BOX_WIDTH = 500;
const BOX_HEIGHT = 500;

const IMAGE_WIDTH = 47;
const IMAGE_HEIGHT = 50;

const STEP = 20;

box = createBox();

const img1 = {
  img: createImg(
    "images/icon1.gif",
    "yellow_icon",
    "yellow_icon",
    0,
    BOX_HEIGHT / 2,
    box,
  ),
  x: 0,
  y: BOX_HEIGHT / 2,
  dirX: 1,
  dirY: -1,
  initialX: 0,
  initialY: BOX_HEIGHT / 2,
  initial_dirX: 1,
  initial_dirY: -1,
  desc: null,
};

const img2 = {
  img: createImg(
    "images/icon2.gif",
    "pink_icon",
    "pink_icon",
    BOX_WIDTH / 2,
    BOX_HEIGHT,
    box,
  ),
  x: BOX_WIDTH / 2,
  y: BOX_HEIGHT,
  dirX: 1,
  dirY: -1,
  initialX: BOX_WIDTH / 2,
  initialY: BOX_HEIGHT,
  initial_dirX: 1,
  initial_dirY: -1,
  desc: null,
};

const img3 = {
  img: createImg(
    "images/Top.jpg",
    "top_icon",
    "top_icon",
    BOX_WIDTH,
    BOX_HEIGHT / 2,
    box,
  ),
  x: BOX_WIDTH,
  y: BOX_HEIGHT / 2,
  dirX: -1,
  dirY: 1,
  initialX: BOX_WIDTH,
  initialY: BOX_HEIGHT / 2,
  initial_dirX: -1,
  initial_dirY: 1,
  desc: null,
};

const images = [img1, img2, img3];

for (let i = 0; i < images.length; i++) {
  images[i].desc = createDesc(images[i]);
}

const goButton = document.getElementById("go");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let timer_id;
goButton.addEventListener("click", function () {
  if (timer_id) {
    clearInterval(timer_id);
  }

  timer_id = setInterval(function () {
    for (let i = 0; i < images.length; i++) {
      moveImg(images[i]);
    }
  }, 50);
});

stopButton.addEventListener("click", function () {
  clearInterval(timer_id);
});

resetButton.addEventListener("click", function () {
  if (timer_id) {
    clearInterval(timer_id);
  }

  for (let i = 0; i < images.length; i++) {
    resetImg(images[i]);
  }
});

function createBox() {
  let box = document.getElementById("floating_area");

  box.style.setProperty("border", "4px solid #00ffb7");
  box.style.width = BOX_WIDTH + IMAGE_WIDTH + "px";
  box.style.height = BOX_HEIGHT + IMAGE_HEIGHT + "px";
  box.style.position = "relative";

  return box;
}

function createImg(src, alt, id, left, top, parent) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.id = id;
  img.style.position = "absolute";
  img.style.width = IMAGE_WIDTH + "px";
  img.style.height = IMAGE_HEIGHT + "px";
  img.style.left = left + "px";
  img.style.top = top + "px";
  img.style.backgroundColor = "#e8e8e8";

  parent.appendChild(img);
  return img;
}

function createDesc(imgObj) {
  const p = document.createElement("p");
  p.innerText =
    '<img src="' +
    imgObj.img.src +
    '" style="left: ' +
    imgObj.initialX +
    "px; top: " +
    imgObj.initialY +
    'px;">';

  p.style.color = "blue";
  const wrapper = document.querySelector(".wrapper");
  wrapper.appendChild(p);

  return p;
}

function updateDesc(imgObj) {
  imgObj.desc.innerText =
    '<img src="' +
    imgObj.img.src +
    '" style="left: ' +
    imgObj.x +
    "px; top: " +
    imgObj.y +
    'px;">';
}

function moveImg(imgObj) {
  imgObj.x += STEP * imgObj.dirX;
  imgObj.y += STEP * imgObj.dirY;

  if (imgObj.x >= BOX_WIDTH) {
    imgObj.x = BOX_WIDTH;
    imgObj.dirX *= -1;
  } else if (imgObj.x <= 0) {
    imgObj.x = 0;
    imgObj.dirX *= -1;
  }

  if (imgObj.y >= BOX_HEIGHT) {
    imgObj.y = BOX_HEIGHT;
    imgObj.dirY *= -1;
  } else if (imgObj.y <= 0) {
    imgObj.y = 0;
    imgObj.dirY *= -1;
  }
  imgObj.img.style.left = imgObj.x + "px";
  imgObj.img.style.top = imgObj.y + "px";
  updateDesc(imgObj);
}

function resetImg(imgObj) {
  imgObj.x = imgObj.initialX;
  imgObj.y = imgObj.initialY;
  imgObj.dirX = imgObj.initial_dirX;
  imgObj.dirY = imgObj.initial_dirY;
  imgObj.img.style.left = imgObj.x + "px";
  imgObj.img.style.top = imgObj.y + "px";
  updateDesc(imgObj);
}
