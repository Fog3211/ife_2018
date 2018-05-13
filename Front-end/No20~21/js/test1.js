var btn = document.getElementById("submit-btn");
btn.onclick = function () {
    var name = document.getElementById("name");
    var name_value = name.value;
    console.log(name_value);
}

function keydown(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        e.returnValue = false;
        e.cancel = true;
        btn.click();
    } else if (e.keyCode == 27) {
        document.getElementById("name").value = "";
    }
}