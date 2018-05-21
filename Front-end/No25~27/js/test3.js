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
    var str=arr[0]+"/"+arr[1]+"/"+arr[2]+" "+arr[3]+":"+arr[4]+":"+arr[5];
    var time=new Date(str).getTime();   
    return time;
}
// 计算时间差
function timeGap(curTimeArr, oriTimeArr) {
    var time=curTimeArr-oriTimeArr;
    console.log(time);
    var flag=0;
    if(time>=0){
        flag=1;
    }
    var arr=[];
    arr[0]=Math.floor(time/(24*3600*1000));//天
    var leave1=time%(24*3600*1000);
    arr[1]=Math.floor(leave1/(3600*1000));//小时
    var leave2=leave1%(3600*1000);
    arr[2]=Math.floor(leave2/(60*1000));//分
    var leave3=leave2%(60*1000);
    arr[3]=Math.floor(leave3/1000);//秒
     console.log(arr);
    return arr;
}



var curTimeArr = getCurTime();
var oriTimeArr = getOriTime();
timeGap(curTimeArr, oriTimeArr);
// setInterval(timeGap,1000);