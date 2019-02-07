$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fullNameInput = $("input#fullName").val();
    var dateInput = $("input#date").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();


    $(".fullName").text(fullNameInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    $("#story").show();

    event.preventDefault();
  });
});
