var p = document.getElementById("result");
var btn = document.getElementsByTagName("button");
var radio_a = document.getElementById("radio-a");
var radio_b = document.getElementById("radio-b");
var num_a = document.getElementById("num-a");
var num_b = document.getElementById("num-b");
// 判断当前选中的输入框输入内容是否为数字
btn[0].onclick = function () {
    // 正则判断浮点数
    var reg = /^(-?\d+)(\.\d+)?$/g;
    if (radio_a.checked) {
        p.innerHTML = reg.test(num_a.value);
    } else if (radio_b.checked) {
        p.innerHTML = reg.test(num_b.value);
    } else {
        alert("请选择按钮");
        console.log("Error!");
    }
}
// 把 A 四舍五入为 B 个小数位数的数字
btn[1].onclick = function () {
    // 正则判断正整数    
    var reg = /^[1-9]\d*$/g;
    if (reg.test(num_b.value)) {
        p.innerHTML = (num_a.value * 1).toFixed(num_b.value);
    } else {
        alert("请输入B为正整数");
        console.log("Error!");
    }
}
// 当前选中数字的绝对值
btn[2].onclick = function () {
    checknumber(num_a.value, num_b.value);
    if (radio_a.checked) {
        p.innerHTML = Math.abs(num_a.value);
    } else if (radio_b.checked) {
        p.innerHTML = Math.abs(num_b.value);
    } 
}
// 对当前选中的数字进行上舍入
btn[3].onclick = function () {
    checknumber(num_a.value, num_b.value);
    if (radio_a.checked) {
        p.innerHTML = Math.ceil(num_a.value);
    } else if (radio_b.checked) {
        p.innerHTML = Math.ceil(num_b.value);
    } 
}
// 对当前选中的数字进行下舍入
btn[4].onclick = function () {
    checknumber(num_a.value, num_b.value);
    if (radio_a.checked) {
        p.innerHTML = Math.floor(num_a.value);
    } else if (radio_b.checked) {
        p.innerHTML = Math.floor(num_b.value);
    } 
}
// 把当前选中的数字四舍五入为最接近的整数
btn[5].onclick = function () {
    checknumber(num_a.value, num_b.value);
    if (radio_a.checked) {
        p.innerHTML = Math.round(num_a.value);
    } else if (radio_b.checked) {
        p.innerHTML = Math.round(num_b.value);
    }
}
// 返回 A 和 B 中的最高值
btn[6].onclick = function () {
    checknumber(num_a.value, num_b.value);
    var a = document.getElementById("radio-a").parentNode.nextElementSibling.value;
    var b = document.getElementById("radio-b").parentNode.nextElementSibling.value;
    if (a - b >= 0) {
        p.innerHTML = a;
    } else {
        p.innerHTML = b;
    }
}
// 返回 A 和 B 中的最低值
btn[7].onclick = function () {
    checknumber(num_a.value, num_b.value);
    var a = document.getElementById("radio-a").parentNode.nextElementSibling.value;
    var b = document.getElementById("radio-b").parentNode.nextElementSibling.value;
    if (a - b >= 0) {
        p.innerHTML = b;
    } else {
        p.innerHTML = a;
    }
}
// 判断数字
function checknumber(a, b) {
    var regx = /^(-?\d+)(\.\d+)?$/;
    if (regx.test(a) && radio_a.checked) {      
        return 1;
    }else if (regx.test(b) && radio_b.checked) {       
        return 1;
    }else {
        console.log("Error!");
        return;
    }
}