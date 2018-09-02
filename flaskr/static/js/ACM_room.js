function toggleDiv(){

    if ($(window).width() < 768) {

            $("#navbarMenu").hide();
            $("#drop-down-menu").show();

    }else{

        $("#navbarMenu").show();
        $("#drop-down-menu").hide();

    }

}

$(document).ready(function () {
    toggleDiv();

    $(window).resize(function(){
        toggleDiv();
    });

});


function get_time() {
    var d = new Date();
    var n = d.getHours();
    document.getElementById("time").innerHTML = n;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}