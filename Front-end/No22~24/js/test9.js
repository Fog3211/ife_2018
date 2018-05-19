var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
// 将上面数组分别按从大到小以及从小到大进行排序后在console中输出

console.log("从小到大: "+arr1.sort(numsort));
console.log("从大到小: "+arr1.reverse(numsort));


var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
// 将上面数组分别按字母顺序a-z及z-a进行排序，在console中输出
console.log("字母顺序a-z: "+arr2.sort());
console.log("字母顺序z-a: "+arr2.reverse());



var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
// 将上面的二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出，输出结果应该为：
console.log("从大到小: ");
console.log(arr3.sort(arr3sort));


var arr4 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
// 将上面数组分别按元素对象的value值从小到大进行排序后输出

console.log("从大到小: ");
console.log(arr4.sort(arr4sort));


function numsort(a,b){
    return  a-b;
}
function arr3sort(a,b){
    return b[1]-a[1];
}
function arr4sort(a,b){
    return b.value-a.value;
}