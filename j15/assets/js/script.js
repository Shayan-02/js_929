// Add your JavaScript code here
$(document).ready(function(){
    // $("#hide").click(function () {
    //     $("p").hide();
    // });

    // $("#show").click(function () {
    //     $("p").show();
    // });
    $("button").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});