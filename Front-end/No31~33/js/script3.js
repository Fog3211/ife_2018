var productWrapper=document.getElementById("product-radio-wrapper");
var regionWrapper=document.getElementById("region-radio-wrapper");
var productArr=['手机','笔记本','智能音箱'];
var regionArr=['华北','华南','华东'];
function createCheckBox( wrapper, arr ) {
    var checkbox=document.createElement('checkbox');
    生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
    遍历参数对象 {
        生成各个子选项checkbox的html，给一个自定义属性表示为子选项
    }
    容器innerHTML = 生成好的html集合

    给容器做一个事件委托 = function() {
        if 是checkbox
            读取自定义属性
            if 全选
                做全选对应的逻辑
            else
                做子选项对应的逻辑
    }
}

// 对象或数组自己根据喜好实现均可
createCheckBox(productWrapper, productArr);

createCheckBox(regionWrapper, regionArr);