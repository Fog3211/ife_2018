var queue = ["apple", "pear"];
var oInput = document.getElementById("queue-input");
var oIn = document.getElementById("in-btn");
var oOut = document.getElementById("out-btn");
var oFont = document.getElementById("font-btn");
var oEmpty = document.getElementById("empty-btn");
var p = document.getElementById("queue-cont");
var result = '';
// 入队
oIn.onclick = function () {
    queue.unshift(oInput.value);
    // console.log(queue);
    result = queue.join("-&gt;");
    p.innerHTML = "队列内容：" + result;
}

// 出队
oOut.onclick = function () {
    queue.pop();
    // console.log(queue);
    result = queue.join("-&gt;");
    p.innerHTML = "队列内容：" + result;
}

// 打印队头元素内容
oFont.onclick = function () {
    result = queue.shift();
    // 补上队头
    queue.unshift(result);
    // console.log(queue);
    p.innerHTML = "队头：" + result;
}

// 判断队列是否为空
oEmpty.onclick = function () {
    //  console.log(queue.length);
    result = queue.join("-&gt;");
    if (queue.length == 0) {
        p.innerHTML = "队列为空";
    } else {
        p.innerHTML = "队列不为空";
    }
}