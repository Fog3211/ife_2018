// 获取时间函数
function getTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var weekday = time.getDay();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    hour = addDigit(hour);
    minute = addDigit(minute);
    second = addDigit(second);
    var arr = [];
    var str = '';
    str = year + ' ' + month + ' ' + day + ' ' + weekday + ' ' + hour + ' ' + minute + ' ' + second;
    arr = str.split(' ');
    return arr;
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
// 星期转换2
function changeweek2(weekday){
    var weekarr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekarr[weekday];
}
// 位数补齐
function addDigit(n) {
    if (n < 10) {
        n = '0' + n;
    }
    return n;
}
// 判断上午下午
function ampm(n){
    if(n>=12){
        return "AM";
    }else{
        return "PM";  
    }
}
// 格式1
function type1(arr) {
    var str = '';
    str = arr[0] + '年' + arr[1] + '月' + arr[2] + '日' + ' 星期' + changeweek1(1.0*arr[3]) + ' ' + arr[4] + ':' + arr[5] + ':' + arr[6];
    return str;
}
// 格式2
function type2(arr) {
    var str = '';
    str = arr[0] + '-' + arr[1] + '-' + arr[2] + ' '  + changeweek2(1.0*arr[3]) + ' ' + arr[4] + ':' + arr[5] + ':' + arr[6]+' '+ampm(arr[4]);
    return str;
}



// YYYY 年 MM 月 DD 日 星期 D HH:mm:ss
var html_time1 = document.querySelector("#time1");
html_time1.innerHTML = type1(getTime());


// 输出格式变为：2008-10-10 Monday 07:10:30 PM
var html_time2 = document.querySelector("#time2");
html_time2.innerHTML = type2(getTime());