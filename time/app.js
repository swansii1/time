let mode = "time";

const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

output.textContent = format(mode);

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode("full");

dateBtn.onclick = bindMode("date");

timeBtn.onclick = bindMode("time");

update();
setInterval(update, 100);

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString() + ":" + now.getMilliseconds();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}
