
$("#jumbo2").hide();
$("#skillz").hide();
$("#jumbo").show();

$('#dandy').on("click", function () {
    $("#jumbo").hide();
    $("#jumbo2").show();
});

$('#jumbo2-btn').on("click", function () {
    $("#jumbo").show();
    $("#jumbo2").hide();
    $("#skillz").hide();
    $("#history").show();

});

$('#dandy').on("click", function () {
    $("#skillz").show();
    $("#history").hide();
});