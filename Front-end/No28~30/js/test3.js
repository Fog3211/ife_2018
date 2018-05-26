// 输入a@1->出现提示框，提示a@163.com, a@126.com
// 输入a@g->出现提示框，提示a@gmail.com
// 输入a@2->出现提示框，提示a@263.net
// 输入a@qq->出现提示框，提示a@qq.com
// 输入a@163.->出现提示框，提示a@163.com
// 输入a@126.com->出现提示框，提示a@126.com
// 输入a@qq.com （两个空格）->出现提示框，提示a@qq.com
// 输入a@qq.comm->出现提示框，出现全部提示

var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
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
            if (postfixList[i].indexOf(result_r) == 0) {
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

// function 生成提示框中的提示内容() {
//     用来拼接的用户输入内容 = 获取用户输入
//     if 用户输入含有@ {
//         用来拼接的用户输入内容 = @之前的字符串
//         用来前缀匹配的用户输入内容 = @之后的字符串
//     }    
//     遍历postfixList {
//         if 用来前缀匹配的用户输入内容前缀匹配遍历字符串元素
//             把用来拼接的用户输入内容和这个字符串进行结合成为一个Li
//     }
//     返回生成的提示内容
// }