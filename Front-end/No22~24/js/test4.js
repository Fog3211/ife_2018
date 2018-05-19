var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }
        }
    }
}
var dlrList = [];
var ldrList = [];
var lrdList = [];
// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    var id;

    function dlr(node) {
        if (node != null) {
            if (node.name == name) {
                id = node.id;
            }
            dlr(node.left);
            dlr(node.right);
        }
    }
    dlr(tree);
    return id;
}
// console.log(findIdByName("Kai"));

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    var name;

    function dlr(node) {
        if (node != null) {
            if (node.id == id) {
                name = node.name;
            }
            dlr(node.left);
            dlr(node.right);
        }
    }
    dlr(tree);
    return name;
}
// console.log(findNameById("10"));

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
    function dlr(node) {
        if (node != null) {
            dlrList.push(node.name);
            dlr(node.left);
            dlr(node.right);
        }
    }
    dlr(tree);
    console.log(dlrList);
}
// getListWithDLR();

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
    function ldr(node) {
        if (node != null) {
            ldr(node.left);
            ldrList.push(node.name);
            ldr(node.right);
        }
    }
    ldr(tree);
    console.log(ldrList);
}
// getListWithLDR();

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    function lrd(node) {
        if (node != null) {
            lrd(node.left);
            lrd(node.right);
            lrdList.push(node.name);
        }
    }
    lrd(tree);
    console.log(lrdList);
}
// getListWithLRD();