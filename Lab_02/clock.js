setInterval(czas, 1000);

function czas() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currtime = hour + ":" + min + ":" + sec;

  document.getElementById("clock").innerHTML = currtime;
}

czas();
