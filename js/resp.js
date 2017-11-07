function navChange() {
    var nav = document.getElementById("top");
    if (nav.className === "top") {
        nav.className += " responsive";
    } else {
        nav.className = "top";
    }
}