let hour = 0;
let min =0;
let sec =0;
let count =0;
let isRunning = false;
let timeout_id;
function start(){
    isRunning = true;
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("reset").disabled = false;
    timeout_id = setInterval(stopwatch,10);
}
function pause(){
    isRunning = false;
    //clearTimeout(timeout_id);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = false;
    clearInterval(timeout_id);
}
function reset(){
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = true;
    isRunning = false;
    //clearTimeout(timeout_id);
    clearInterval(timeout_id);
    document.getElementById("count").textContent = "00";
    document.getElementById("second").textContent = "00";
    document.getElementById("minute").textContent = "00";
    document.getElementById("hour").textContent = "00";
    count =0;
    sec=0;
    min=0;
    hour=0;
}
function stopwatch(){
    count++;
    if(count == 100)
    {
        sec++;
        count =0;
    }
    if(sec == 60)
    {
        min++;
        sec =0;
    }
    if(min == 60)
    {
        hour++;
        min =0;
    }
    if(count < 10)
    {
        let str = "0"+count.toString();
        document.getElementById("count").textContent = str;
    }
    else{
        document.getElementById("count").textContent = count;
    }
    if(sec < 10)
    {
        let str = "0"+sec.toString();
        document.getElementById("second").textContent = str;
    }
    else{
        document.getElementById("second").textContent = sec;
    }
    if(min < 10)
    {
        let str = "0"+min.toString();
        document.getElementById("minute").textContent = str;
    }
    else{
        document.getElementById("minute").textContent = min;
    }
    if(hour < 10)
    {
        let str = "0"+hour.toString();
        document.getElementById("hour").textContent = str;
    }
    else{
        document.getElementById("hour").textContent = hour;
    }
    //timeout_id = setTimeout(stopwatch, 1);

}
