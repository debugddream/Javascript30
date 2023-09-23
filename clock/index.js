document.addEventListener("DOMContentLoaded", function () {
    getTime();
})


const getTime = () => {

    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let meridiem = "AM";
    meridiem = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    hour = addSuffix(hour);
    minute = addSuffix(minute);
    second = addSuffix(second);
    document.getElementById("hour").innerText = hour;
    document.getElementById("minute").innerText = minute;
    document.getElementById("second").innerText = second;
    document.getElementById("meridiem").innerText = meridiem;

    setTimeout(getTime, 1000);

}

const addSuffix = (val) => {
    if (val < 10) {
        return (
            "0" + val
        )
    } else {
        return (
            val
        )
    }
}