function toggleDiv() {
    if ($(window).width() < 768) {
            $("#navbarMenu").hide();
            $("#drop-down-menu").show();
    }
    else {
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


var getHumidityInterval;
// reqInterval = setInterval(getHumidity, 1000);

var getTemperatureInterval;
getTemperatureInterval = setInterval(getTemp, 1000);


function getTemp() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "/web/temp", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Temp.innerHTML = xmlhttp.responseText;
        }
    }
}

function getHumidity() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "/web/humidity", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Humidity.innerHTML = xmlhttp.responseText;
        }
    }
}

function switchLight(checkbox) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }


    url = checkbox.checed ? "/web/switchLight/off" : "/web/switchLight/on";
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // data = "{ ";
    // data += checkbox == Light1 ? " \"lamp\" : \"Light1\", " : " \"lamp\" : \"Light2\", ";
    // data += checkbox.checked ? "\"state\" : \"on\"}" : "\"state\" : \"off\",";
    // data += " }";
    // console.log(data);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log("OK");
        }
    }
}
