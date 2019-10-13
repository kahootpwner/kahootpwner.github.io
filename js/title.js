if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}
 
var x = 0;

var titleText = ["KSpam | Free Spammer!", "KSpam | Awesome Spammer", "KSpam | Server Crasher", "KSpam | Bot Spammer", "KSpam | Answers Hack", "KSpam | oof ", "don't blame me petey"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
