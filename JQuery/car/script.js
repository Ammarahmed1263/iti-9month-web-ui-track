$(document).ready(function () {
  let car = $("<img></img>", {
    id: "car_img",
    src: "12.gif",
    alt: "racing_car",
    css: {
      position: "absolute",
      top: "50px",
      cursor: "pointer",
    },
  });

  let txt = $("<p></p>", {
    id: "description",
    html: '&lt;img src="12.gif" alt="racing_car" style="left: <span id="val">0</span>px" &gt;',
    css: {
      "font-family": "monospace",
      position: "absolute",
      top: "150px",
      margin: "0 5px",
      "background-color": "#e1e1e1",
      padding: "10px",
    },
  });

  $("body").append(car, txt);

  car.click(function () {
    const endVal = $(window).width() - $(this).width() - 50;

    car.animate({ left: endVal + "px" }, {
        duration: 1500,
        easing: "linear",
        step: function(now) {
            $("#val").text(Math.round(now));
        }
    });
  });
});
