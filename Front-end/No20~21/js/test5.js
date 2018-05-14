var smile = document.getElementById("smile");
        var num = 0;
       setInterval(function () {
            smile.style.backgroundPositionY = "-" + num + "px";
            if(num>=8160){
                num=0;
            }else{
                num+=480;
            }
        }, 50);