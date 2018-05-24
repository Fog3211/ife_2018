// 输入a->出现提示框，提示a@163.com,a@gmail.com……
// 输入a@->出现提示框，提示a@163.com,a@gmail.com……
// 输入abc@1->出现提示框，提示abc@163.com,abc@gmail.com……
// 输入abc@163.com->出现提示框，提示abc@163.com,abc@gmail.com……
var inputDom = document.getElementById("email-input");
var ulDom = document.getElementById("email-sug-wrapper");
inputDom.oninput = function () {
    var userInput = getInput();
    // 控制email-sug-wrapper的显示/隐藏状态
    if (userInput) {
        var liValues = createHint(userInput);
        addHint(liValues);
    } else {
        ulDom.innerHTML = '';
    }
}
// 生成提示框中的提示内容
function createHint(str) {
    var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    for (var i = 0; i < postfixList.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[j] == '@') {
                str = str.slice(0, j);
                break;
            }
        }
        postfixList[i] = str + '@' + postfixList[i];
    }
    return postfixList;
}
// 将提示内容添加到email-sug-wrapper中
function addHint(arr) {
    // ulDom.innerHTML = '';
    hideHint();
    for (let i = 0; i < arr.length; i++) {
        var liHint = document.createElement("li");
        liHint.innerHTML = arr[i];
        ulDom.appendChild(liHint);
    }
}
// 获取用户输入
function getInput() {
    var str = inputDom.value;
    return str.replace(/(^\s*)|(\s*)$/g, '');
}

function hideHint() {
    // ulDom.style.display = "hidden";
    ulDom.innerHTML = '';
}

// function showHint() {
//     ulDom.style.display = "block";
// }