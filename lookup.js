document.querySelector("form").addEventListener("submit", function() {
    var game = document.querySelector("#game").value;
    var param = document.querySelector('input[name = "gcCheck"]:checked').value;
    if (param == "game") {
        var sQuery = "N-0Z1z13laj"
    } else if (param == "console") { 
        var sQuery = "N-0Z1z13kx2"
    } else if (param == "controller") {
        var sQuery = "N-0Z1z13l22"
    } else if (param == "all") {
        var sQuery = "N-0"
    }
    url = new URL("http://www.gamestop.com/trade/Browse/" + sQuery);
    url.searchParams.set("Ntt", game);
    chrome.tabs.create({url: url.href, active: true});
});

document.querySelector("#game").focus()