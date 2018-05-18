var p = document.getElementById("result");
var btn = document.getElementsByTagName("button");
var radio_a = document.getElementById("radio-a");
var radio_b = document.getElementById("radio-b");

var str_a = document.getElementById("str-a");
var str_b = document.getElementById("str-b");

// 获取当前选中输入的内容长度
btn[0].onclick = function () {
    if (radio_a.checked) {
        p.innerHTML = str_a.value.length;
    } else if (radio_b.checked) {
        p.innerHTML = str_b.value.length;
    }
}

// 当前选中输入中的第3个字符
btn[1].onclick = function () {
    var length_a = str_a.value.length;
    var length_b = str_b.value.length;

    if (radio_a.checked) {
        if (length_a >= 3) {
            p.innerHTML = str_a.value[2];
        } else {
            console.log("Error!");
        }
    } else if (radio_b.checked) {
        if (length_b >= 3) {
            p.innerHTML = str_b.value[2];
        } else {
            console.log("Error!");
        }
    }
}

// 把两个输入框的文字连接在一起输出（concat）
btn[2].onclick = function () {
    p.innerHTML = str_a.value + str_b.value;
}

// 输入B中的内容，在输入A的内容中第一次出现的位置（indexOf）
btn[3].onclick = function () {
    p.innerHTML = "第" + (str_a.value.indexOf(str_b.value) + 1) + "个位置";
}
// 输入A中的内容，在输入B的内容中最后一次出现的位置（lastIndexOf）
btn[4].onclick = function () {
    p.innerHTML = "第" + (str_a.value.lastIndexOf(str_b.value) + 1) + "个位置";
}
// 使用slice获取选中输入框内容的部分内容，参数为num-a及num-b
btn[5].onclick = function () {
    var num_a = document.getElementById("num-a").value;
    var num_b = document.getElementById("num-b").value;
    var length_a = str_a.value.length;
    var length_b = str_b.value.length;
    if (radio_a.checked) {
            p.innerHTML = str_a.value.slice(num_a, num_b);
        
    } else if (radio_b.checked) {
            p.innerHTML = str_b.value.slice(num_a, num_b);
    }
}
// 当前选中输入框的行数
btn[6].onclick = function () {
 
}
// 使用substr获取选中输入框内容的子字符串，参数为num-a及num-b
btn[7].onclick = function () {
    p.innerHTML = str_a.style.row;
}
// 把所选输入框中的内容全部转为大写
btn[8].onclick = function () {
    if (radio_a.checked) {
            p.innerHTML = str_a.value.toUpperCase();
    } else if (radio_b.checked) {
        p.innerHTML = str_b.value.toUpperCase();
    }
}
// 把所选输入框中的内容全部转为小写
btn[9].onclick = function () {
    if (radio_a.checked) {
            p.innerHTML = str_a.value.toLowerCase();
    } else if (radio_b.checked) {
        p.innerHTML = str_b.value.toLowerCase();
    }
}
// 把所选输入框中内容的半角空格全部去除
btn[10].onclick = function () {

}
// 把所选输入框中内容的a全部替换成另外一个输入框中的内容
btn[11].onclick = function () {
    if (radio_a.checked) {
        str_a.value= str_b.value;
    } else if (radio_b.checked) {
        str_b.value= str_a.value;
    }
}