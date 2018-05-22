// 获取当前时间毫秒数
function getCurTime() {
    var time = new Date();
    return time.getTime();
}
// 获取原始时间毫秒数
function getOriTime() {
    var select = document.getElementsByTagName("select");
    var arr = [];
    for (i = 0; i < 6; i++) {
        arr[i] = select[i].value;
    }
    var str = arr[0] + "/" + arr[1] + "/" + arr[2] + " " + arr[3] + ":" + arr[4] + ":" + arr[5];
    var time = new Date(str).getTime();
    return time;
}
// 计算时间差
function timeGap(curTimeArr, oriTimeArr) {
    var time = curTimeArr - oriTimeArr;
    var flag = 0;
    if (time >= 0) {
        flag = 1;
    }
    var arr = [];
    arr[0] = Math.floor(time / (24 * 3600 * 1000)); //天
    var leave1 = time % (24 * 3600 * 1000);
    arr[1] = Math.floor(leave1 / (3600 * 1000)); //小时
    var leave2 = leave1 % (3600 * 1000);
    arr[2] = Math.floor(leave2 / (60 * 1000)); //分
    var leave3 = leave2 % (60 * 1000);
    arr[3] = Math.floor(leave3 / 1000); //秒
    if (flag == 1) {
        arr[4] = 1;
    } else {
        arr[4] = 0;
    }
    arr = changeArr(arr);
    return arr;
}
// 时间调整
function changeArr(arr) {
    for (var i = 0; i < 4; i++) {
        if (arr[i] < 0)
            arr[i] *= -1;
        if (arr[i] < 10) {
            arr[i] = '0' + arr[i];
        }
    }
    return arr;
}

// 下拉列表赋值
function addOption(id) {
    var start, end;
    var select = document.getElementById(id);
    select.innerHTML = "";
    switch (id) {
        case "year-select":
            start = 2010;
            end = 2025;
            break;
        case "month-select":
            start = 1;
            end = 12;
            break;
        case "day-select":
            t = checkDay();
            start = 1;
            end = t;
            break;
        case "hour-select":
            start = 0;
            end = 23;
            break;
        case "minite-select":
            start = 0;
            end = 59;
            break;
        case "second-select":
            start = 0;
            end = 59;
            break;
    }
    for (var i = start; i <= end; i++) {
        var option = document.createElement("option");
        option.innerText = i;
        select.appendChild(option);
    }
}
// 计算天数
function checkDay() {
    var year = document.getElementById('year-select').value;
    var month = document.getElementById('month-select').value;
    var t;
    switch (month * 1.0) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            t = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            t = 30;
            break;
        case 2:
            t = 28;
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                t = 29;
            }
            break;
    }
    return t;
}
// 下拉列表初始化
function addAllOption() {
    addOption("year-select");
    addOption("month-select");
    addOption("day-select");
    addOption("hour-select");
    addOption("minite-select");
    addOption("second-select");
}
addAllOption();

// 下拉列表改变时
var selects = document.getElementsByTagName("select");
for (let i = 0; i < selects.length; i++) {
    // var result = document.querySelector("#wrap2 #result-wrapper");
    selects[i].onchange = function () {
        switch (selects[i].id) {
            case "year-select":
            case "month-select":
                addOption("day-select");
                break;
        }
        print();
    }
}
// 星期转换1
function changeweek1(weekday) {
    switch (weekday) {
        case 0:
            weekday = "日";
            break;
        case 1:
            weekday = "一";
            break;
        case 2:
            weekday = "二";
            break;
        case 3:
            weekday = "三";
            break;
        case 4:
            weekday = "四";
            break;
        case 5:
            weekday = "五";
            break;
        case 6:
            weekday = "六";
            break;
    }
    return weekday;
}
// 渲染
function print() {
    var curTimeArr = getCurTime();
    var oriTimeArr = getOriTime();
    var arr = timeGap(curTimeArr, oriTimeArr);
    var result = document.getElementById("result-wrapper");
    var d = new Date();
    d.setFullYear(selects[0].value);
    d.setMonth(selects[1].value - 1);
    d.setDate(selects[2].value);
    var date = changeweek1(d.getDay());
    if (curTimeArr < oriTimeArr) {
        result.innerHTML = "现在距离 " + selects[0].value + "年" + selects[1].value + "月" +
            selects[2].value + "日星期" + date + " " + selects[3].value + ":" + selects[4].value + ":" + selects[5].value +
            " 还有" + arr[0] + " 天" + arr[1] + " 小时" + arr[2] + " 分" + arr[3] + " 秒";
    } else {
        result.innerHTML = "现在距离 " + selects[0].value + "年" + selects[1].value + "月" +
            selects[2].value + "日星期" + date + " " + selects[3].value + ":" + selects[4].value + ":" + selects[5].value +
            " 已经过去" + arr[0] + " 天" + arr[1] + " 小时" + arr[2] + " 分" + arr[3] + " 秒";
    }

}

setInterval(print, 1000);