var seconds = 00;
var tens = 00;
var appendtens = document.getElementById("tens");
var appendsecs = document.getElementById("seconds");
var btnstart = document.getElementById("button-start");
var btnstop = document.getElementById("button-stop");
var btnreset = document.getElementById("button-reset");


var interval;
function starttimer(){
    tens++;
    if(tens<9){
        appendtens.innerHTML = "0"+tens;
    }
    if(tens>9){
        appendtens.innerHTML = tens;
    }
    if(tens>99){
        seconds++;
        appendsecs.innerHTML = "0"+seconds;
        tens=0;
        appendtens.innerHTML ="0"+0;
    }
    if(seconds > 9){
        appendsecs.innerHTML = seconds;
    }
}

btnstart.onclick = function(){
    interval = setInterval(starttimer);
};

btnstop.onclick = function(){
    clearInterval(interval);
};

btnreset.onclick = function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendsecs.innerHTML = seconds;
    appendtens.innerHTML = tens;
};