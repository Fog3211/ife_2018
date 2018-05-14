var fade_btn = document.getElementById("fade-btn");
var fade_obj = document.getElementById("fade-obj");
fade_btn.onclick = function () {
    if (fade_btn.innerHTML == "淡出") {
        var num = 10;
        var fade_out = setInterval(
            function () {
                num--;
                fade_obj.style.opacity = num / 10;
                fade_btn.disabled = "disabled";
                if (num <= 0) {
                    clearInterval(fade_out);
                    fade_btn.innerHTML = "淡入";
                    fade_btn.removeAttribute('disabled');
                }
            }, 100);
    }else{
        var num=0;
        var fade_in = setInterval(
            function () {
                num++;
                fade_obj.style.opacity = num / 10;
                fade_btn.disabled = "disabled";
                if (num >=10) {
                    clearInterval(fade_in);
                    fade_btn.innerHTML = "淡出";
                    fade_btn.removeAttribute('disabled');
                }
            }, 100);
    }
}
