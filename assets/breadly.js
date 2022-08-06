function getTodaysDate() {
    const d = new Date();
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const daySuffix =
        d.getDate() +
        (d.getDate() % 10 == 1 && d.getDate() != 11 ?
            "st" :
            d.getDate() % 10 == 2 && d.getDate() != 12 ?
            "nd" :
            d.getDate() % 10 == 3 && d.getDate() != 13 ?
            "rd" :
            "th");
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let day = weekday[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    document.getElementById("todaysDate").innerHTML = day + " " + month + " " + daySuffix + ", " + year;
}

//   get current time
function getCurrentTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    document.getElementById("currentTime").innerHTML = hours + ":" + minutes;
}
//get today's date
getTodaysDate();
//update time every second
setInterval(getCurrentTime, 1000);

//get json from https://api.npoint.io/6f845374e05d1f612cd3 and create list item for each item in the links
function getLinks() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://clarkcms-default-rtdb.firebaseio.com/breadly.json", true);
    xhr.onload = function () {
        if (this.status == 200) {
            const links = JSON.parse(this.responseText).links;
            links.forEach(link => {
                const li = document.createElement("li");
                li.innerHTML = '<a href="' + link.href + '" target="' + link.target + '" class="button n01"><i class="' + link.icon + '"></i><span class="label">' + link.title + '</span></a>';
                document.getElementById("buttons01").appendChild(li);
            });
        }
    };
    xhr.send();
}
getLinks();