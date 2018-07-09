var select1 = document.getElementById("region-select1");
var select2 = document.getElementById("region-select2");
var wrapper = document.getElementById("table-wrapper");
var list = ["商品", "地区", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
select1.onchange = function () {
    wrapper.innerHTML = '';
    createTable();
}

select2.onchange = function () {
    wrapper.innerHTML = '';
    createTable();
}
function createTable() {

    var table = document.createElement("table");
    var tr = document.createElement("tr");

    for (var i = 0; i < 13; i++) {
        var th = document.createElement("th");
        th.innerHTML = list[i];
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (let i = 0; i < sourceData.length; i++) {
        if (sourceData[i].region ==  select1.value && sourceData[i].product == select2.value) {
            var tr = document.createElement("tr");
            for (let j = 0; j < 13; j++) {
                var td = document.createElement("td");
                if (j == 0) {
                    var txt = document.createTextNode(sourceData[i].product);
                } else if (j == 1) {
                    var txt = document.createTextNode(sourceData[i].region);
                } else {
                    var txt = document.createTextNode(sourceData[i].sale[j - 2]);
                }
                td.appendChild(txt);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        table.setAttribute("border", 1);
        wrapper.appendChild(table);
    }
}
createTable();