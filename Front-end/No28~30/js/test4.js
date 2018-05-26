// 使用CSS实现：鼠标滑过提示框的某一个提示时，这个提示内容背景色变化，表示鼠标经过了这个DOM节点
// 鼠标如果点击某个提示，则提示内容进入输入框，同时提示框消失
// 在上个步骤结束后，在输入框中任意再输入字符或删除字符，则重新开始出现提示框

var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var inputDom = document.getElementById("email-input");
var ulDom = document.getElementById("email-sug-wrapper");
var liHint = document.getElementsByTagName("li");
inputDom.focus();
inputDom.oninput = function () {
    var userInput = getInput();
    // 控制email-sug-wrapper的显示/隐藏状态
    if (userInput) {
        var liValues = createHint(userInput);
        addHint(liValues);
    } else {
        ulDom.innerHTML = '';
    }
    mouseChoose();
}
// 生成提示框中的提示内容
function createHint(str) {
    var resultArr = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    for (var i = 0; i < postfixList.length; i++) {
        var result_l = str;
        var result_r = '';
        var pos = str.length;
        for (var j = 0; j < str.length; j++) {
            if (str[j] == '@') {
                result_l = str.slice(0, j);
                pos = j;
                break;
            }
        }
        result_r = str.slice(pos + 1, str.length);
        for (var i = 0; i < postfixList.length; i++) {
            if (postfixList[i].indexOf(result_r) === 0) {
                // console.log(x);
                resultArr[i] = result_l + '@' + postfixList[i];
            } else {
                resultArr[i] = '';
            }
        }
        // console.log(index);
    }
    var str_checked = resultArr.join('');
    if (!str_checked) {
        // console.log("1")
        for (var k = 0; k < postfixList.length; k++) {
            resultArr[k] = result_l + '@' + postfixList[k];
        }
        return resultArr;
    }
    return resultArr;
}
// 将提示内容添加到email-sug-wrapper中
function addHint(arr) {
    // ulDom.innerHTML = '';
    hideHint();
    for (let i = 0; i < arr.length; i++) {
        var liHint = document.createElement("li");
        liHint.innerHTML = arr[i];
        // liHint.id = "liHint" + i;
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
// 鼠标选取
function mouseChoose() {
    for (let j = 0; j < liHint.length; j++) {
        liHint[j].onmouseover = function () {
            for (var i = 0; i < liHint.length; i++) {
                if (i == j) {
                    liHint[i].style.backgroundColor = "pink";
                } else {
                    liHint[i].style.backgroundColor = "white";
                }
            }
        }
        liHint[j].onclick = function () {
            var showChoose = liHint[j].innerHTML;
            inputDom.value = showChoose;
            ulDom.innerHTML = '';
            inputDom.focus();
        }
    }
}