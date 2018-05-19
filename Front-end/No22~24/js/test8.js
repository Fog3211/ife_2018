var stack = ["apple", "pear"];
var oInput = document.getElementById("stack-input");
var oPush = document.getElementById("push-btn");
var oPop = document.getElementById("pop-btn");
var oFont = document.getElementById("font-btn");
var oEmpty = document.getElementById("empty-btn");
var p = document.getElementById("stack-cont");
var result = '';


// 进栈
oPush.onclick = function () {
    stack.unshift(oInput.value);
    // console.log(stack);
    result = stack.join("&lt;-");
    p.innerHTML = "栈内容：" + result;
}

// 退栈
oPop.onclick = function () {
    stack.pop();
    // console.log(stack);
    result = stack.join("&lt;-");
    p.innerHTML = "栈内容：" + result;
}

// 打印栈顶元素内容
oFont.onclick = function () {
    result = stack.pop();
    // 补上栈顶
    stack.push(result);
    // console.log(stack);
    p.innerHTML = "栈头：" + result;
}

// 判断栈是否为空
oEmpty.onclick = function () {
    //  console.log(stack.length);
    result = stack.join("&lt;-");
    if (stack.length == 0) {
        p.innerHTML = "栈为空";
    } else {
        p.innerHTML = "栈不为空";
    }
}