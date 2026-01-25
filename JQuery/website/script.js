$(document).ready(function () {
  $("#about").show();
  $(".nav-button[data-target='#about']").addClass("active");

  $(".nav-button").click(function () {
    let target = $(this).data("target");

    $(".nav-button").removeClass("active");
    $(this).addClass("active");

    if (target == "#services") {
      $(target).slideToggle(600);
      $(".content-section").not(".dropdown-menu").hide();
    } else {
      $("#services").slideUp();
      $(".content-section").not(".dropdown-menu").hide();
      $(target).fadeIn(1000);
    }
  });

  let currentImg = 1;
  let totalImgs = 8;
  $(".slide-button").click(function () {
    let isNext = $(this).attr("alt") === "next_button";

    if (isNext) {
      currentImg = currentImg === totalImgs ? 1 : currentImg + 1;
    } else {
      currentImg = currentImg === 1 ? totalImgs : currentImg - 1;
    }

    $("#main-img").fadeOut(300, function () {
      $(this).attr("src", "images/" + currentImg + ".jpg");

      $(this).fadeIn(300);

      $("#img-num").text(currentImg);
    });
  });

  $("#submit-complaint").click(function () {
    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let complaint = $("#complaint-text").val();

    if (
      name.trim() == "" ||
      email.trim() == "" ||
      phone.trim() == "" ||
      complaint.trim() == ""
    ) {
      alert("All Fields Are Required");
      return;
    }

    $("#view-name").text(name);
    $("#view-email").text(email);
    $("#view-phone").text(phone);
    $("#view-complaint").text(complaint);

    $("#complaint-form").hide("blind", 500, function () {
      $("#complaint-info").show("drop", { direction: "down" }, 500);
    });
  });

  $("#edit-complaint").click(function () {
    $("#complaint-info").hide("fade", 300, function () {
      $("#complaint-form").show("fade", 300);
    });
  });
});
