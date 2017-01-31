var rbs = document.getElementById("radioButtons").elements;

for (var i=0, len=rbs.length; i<len; i++) {
    rbs[i].onclick = function() {
        document.querySelector("#game").focus();
    };
}