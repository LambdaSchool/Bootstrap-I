
$("#jumbo2").hide();
$("#jumbo").show();

$('#jumbo-btn').on("click", function () {
    $("#jumbo").hide();
    $("#jumbo2").show();
});

$('#jumbo2-btn').on("click", function () {
    $("#jumbo").show();
    $("#jumbo2").hide();
});