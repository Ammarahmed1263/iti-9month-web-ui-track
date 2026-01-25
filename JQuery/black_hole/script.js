$(function () {
  $("#draggable").draggable({
    revert: "invalid",
    start: function () {
      $(this)
        .find("#shake-layer")
        .effect("shake", { distance: 15, times: 2 }, 800);
    },
  });

  $("#droppable").droppable({
    accept: "#draggable",
    drop: function (event, ui) {
      $(ui.draggable).find("#shake-layer").stop(true);

      ui.draggable.position({
        my: "center",
        at: "center",
        of: $(this),
        using: function (pos) {
          $(this).animate(pos, 300, "easeOutBack");
    },
  });

      ui.draggable.fadeOut(800);
    },
  });
});
