/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = "";
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[0] == ' ') {
            arr.shift();
        } else {
            break;
        }
    }
    for (var j = arr.length - 1; j >= 0; j--) {
        if (arr[j] == ' ') {
            arr.pop();
        } else {
            break;
        }
    }
    result = arr.join('');
    // do something

    return result;
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";
    var arr = str.split('');
    for (var i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                arr[j] = ' ';
            } else {
                break;
            }
        }
    }
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != ' ') {
            newarr.push(arr[i]);
        }
    }
    result = newarr.join('');
    // do something

    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc