const tubelight = () => {
    let bulbdata = document.getElementById('data');
    for (i = 1; i < 5; i++) {
        let bid = document.getElementById('light'.concat(i));
        let background = document.getElementsByTagName("body");

        if (bid.src.match('./images/lighton.png')) {
            bid.src = './images/lightoff.png';
            bulbdata.innerHTML = "Light is OFF";
            bulbdata.style.color = "black";
        } else {
            bid.src = './images/lighton.png';
            bulbdata.innerHTML = "Light is ON";
            bulbdata.style.color = "yellow";
        }
    }
}

var button = document.getElementById("click");
var body = document.getElementsByTagName("body");

button.addEventListener("click", function () {
    body[0].style.backgroundImage = "url(../images/bg1.jpg)";
});