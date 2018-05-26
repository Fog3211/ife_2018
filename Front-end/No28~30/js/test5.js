// 当有提示框的时候，默认第一个提示为被选择状态，用一个和鼠标滑过不一样的背景色来标识
// 当有输入框的时候，按上键，可以向上移动选择状态，如果按键之前的被选择提示是第一个，则被选状态移到最下面一个
// 当有输入框的时候，按下键，可以向下移动选择状态，如果按键之前的被选择提示是最后一个，则被选状态移到第一个
// 当有输入框时，按回车键，则将当前被选中状态的提示内容，放到输入框中，并隐藏提示框
// 当没有输入框的时候，这3个键盘按键无响应
// 当用户输入发生改变的时候，选择状态都重新切回到第一个提示

var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var inputDom = document.getElementById("email-input");
var ulDom = document.getElementById("email-sug-wrapper");
var liHint = document.getElementsByTagName("li");
// 键盘选中游标
var index = 0;
inputDom.focus();
inputDom.oninput = function () {
    index=0;
    var userInput = getInput();
    // 控制email-sug-wrapper的显示/隐藏状态
    if (userInput) {
        var liValues = createHint(userInput);
        addHint(liValues);
    } else {
        ulDom.innerHTML = '';
    }
    mouseChoose();
    printColor();
    // console.log(liHint)
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
// 键盘事件
document.onkeydown = function (event) {
    var e = event || window.event;
    switch (e.keyCode) {
        //Ecs
        case 27:
            inputDom.select();
            break;
            //Enter
        case 13:
            enterSelect();
            break;
            // Up
        case 38:
            if (inputDom.value) {
                chooseMove('up');
            }
            break;
            // Down
        case 40:
            if (inputDom.value) {
                chooseMove('down');
            }
            break;
        default:
            break;
    }
}
// 键盘回车事件
function enterSelect() {
    for (var i = 0; i < liHint.length; i++) {
        if (liHint[i].style.backgroundColor == "lightblue") {
            var showChoose = liHint[i].innerHTML;
            inputDom.value = showChoose;
            ulDom.innerHTML = '';
            inputDom.focus();
        }
    }
}
// 键盘选中改变背景色
function printColor() {
    if (ulDom.innerHTML != '') {
        for (let i = 0; i < postfixList.length; i++) {
            if (i == index) {
                liHint[i].style.backgroundColor = "lightblue";
            } else {
                liHint[i].style.backgroundColor = "white";
            }
        }
    }
}
// 键盘上下键事件
function chooseMove(str) {
    if (str == 'up') {
        index--;
        checkIndex();
        printColor();
    } else if (str == 'down') {
        index++;
        checkIndex(index);
        printColor();
    }
}
// 键盘循环选中
function checkIndex() {
    // console.log(index)
    if (index > postfixList.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = postfixList.length - 1;
    }
}