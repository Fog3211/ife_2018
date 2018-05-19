var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    },
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    },
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}
// 如上有一个用来存储学习成绩的对象，编写一个函数，将其转为如下的二维数组


function objToArray(obj) {
    var scoreArray = [];
    for (x in obj) {
        // 个人成绩，定义在这里，实现每个人都是新数组
        var sigleArray = [];
        // 保存姓名 
        sigleArray.push(x);
        // 继续for in 找到科目 最后保存成绩
        for (k in obj[x]) {
            sigleArray.push(obj[x][k]);
        }
        // 把个人成绩push到汇总数组中
        scoreArray.push(sigleArray);
    }
    return scoreArray;
}
console.log(objToArray(scoreObject));

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];
// 如上有一个用来存储多级菜单数据的数组，编写一个函数，将其转为如下的对象
