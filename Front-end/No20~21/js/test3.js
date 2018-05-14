var list = document.querySelectorAll("li");
for (let  i = 0, len = list.length; i < len; i++) {
    list[i].onclick = function () {
      var c=list[i].style.backgroundColor;
        var p = document.getElementsByClassName("color-picker")[0];
        p.innerHTML = c;
        p.style.color = c;
    }
}