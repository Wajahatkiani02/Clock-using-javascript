var dt
var hours
var minute
var seconds

const clock = () => {
    dt = new Date()
    hours = dt.getHours()
    minute = dt.getMinutes()
    seconds = dt.getSeconds()
    // document.getElementById("hour").innerHTML.hours
    document.getElementById("hour").innerHTML = hours
    document.getElementById("min").innerHTML = minute
    document.getElementById("sec").innerHTML = seconds
}
clock()
setInterval(clock, 1000)