function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function chooseTab(e, value) {
    var content = document.getElementsByClassName("tabcontent");
    for (var a = 0; a < content.length; a++) {
        content[a].style.display = "none";
    }
    var links = document.getElementsByClassName("tablinks");
    for (var b = 0; b < links.length; b++) {
        links[b].className = links[b].className.replace(" active", "");
    }
    document.getElementById(value).style.display = "block";
    e.currentTarget.className += " active";
}

function choosePage(e, value) {
    var content = document.getElementsByClassName("pagecontents");
    for (var a = 0; a < content.length; a++) {
        content[a].style.display = "none";
    }
    var links = document.getElementsByClassName("pagelinks");
    for (var b = 0; b < links.length; b++) {
        links[b].className = links[b].className.replace(" active", "");
    }
    document.getElementById(value).style.display = "block";
    e.currentTarget.className += " active";
}
