$("h1").addClass("big-heading");

$("input").on("keydown", function (event) {
  console.log(event);
  $("h1").text(event.key);
});
