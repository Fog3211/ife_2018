function Go() {
    console.log("Go");
}

function GoSteps(n) {
    if (typeof(n)=="number"||typeof(n)=="object") {
        var m = checknum(n);
        if (m != -1) {
            while (m--) {
                Go();
            }
        }else{
            console.log("0");
            return;
        }

    } else if (n == undefined) {
        Go();
    }else{
        console.log("0");
            return;
    }
}

function checknum(n) {
    n = Math.floor(n);
    var regx = /^[1-9]\d*$/;
    if (regx.test(n)) {
        return n;
    }
    return -1;
}

/* 这样我们的代码就会简化很多，当然上面的GoSteps函数目前是不严谨的，我们必须考虑更多的问题，比如传入参数的正确性和合法性，
比如传入的参数是不是数字，是不是正整数，现在请你自己写一个GoSteps函数，然后跑通下面的测试用例。*/

GoSteps(10); // Go 10次
GoSteps(1); // Go 1次
GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
GoSteps(0); // 0次
GoSteps(-1); // 0次
GoSteps(1.4); // Go 1次
GoSteps(1.6); // Go 1次
GoSteps(-1); // 0次
GoSteps(true); // Go 1次
GoSteps(false); // 0次
GoSteps("Test"); // 0次
GoSteps(NaN); // 0次
GoSteps(null); // 0次