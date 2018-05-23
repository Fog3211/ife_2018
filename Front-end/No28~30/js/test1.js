var inputDom = document.getElementById("email-input");
var ulDom = document.getElementById("email-sug-wrapper");
inputDom.oninput = function () {
    var userInput = getInput();
    if(userInput){
        var liValues = createHint(userInput);
        addHint(liValues);
    }
    if (userInput) {
        showHint();
    } else {       
        hideHint();
    }
}
// 生成提示框中的提示内容
function createHint(str) {
    var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    for (i = 0; i < postfixList.length; i++) {
        postfixList[i] = str + '@' + postfixList[i];
    }
    return postfixList;
}

function addHint(arr) {
    ulDom.innerHTML = '';
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
    ulDom.style.display = "hidden";
}

function showHint() {
    ulDom.style.display = "block";
}