// 餐厅类
function Restaurant(cash, seats, staff) {
    this.cash = cash;
    this.seats = seats;
    this.staff = staff;
}
// 招聘职员
Restaurant.prototype.hire = function (staff) {
    this.staff.push(staff);
}
//   解雇职员
Restaurant.prototype.fire = function (staff) {
    for (var i = 0; i < this.staff.length; i++) {
        if (this.staff[i].name == staff.name) {
            this.staff.splice(i, 1);
        }
    }
}

var Id = 0;
// 职员类
function Staff(name, salary) {
    // 属性：ID，姓名，工资
    this.id = Id;
    this.name = name;
    this.salary = salary;
    Id++;
}
//完成一次工作
Staff.prototype.doJob = function () {
    console.log("完成一次工作");
}

// 服务员类，继承自职员
function Waiter(id = 0, name, salary, job) {
    this.job = job;
    Staff.call(this, id, name, salary);
}
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
Waiter.prototype.doJob = function () {
    if (this.job instanceof Array)
    Customer.order();
    else
        console.log("上菜");
}

// 厨师类，继承自职员
function Cook(id = 0, name, salary) {
    Staff.call(this, id, name, salary);
}
// 烹饪出菜品
Cook.prototype.doJob = function () {
    console.log("烹饪出菜品");
}

// 顾客类
function Customer() {

}
// 点菜
Customer.prototype.order = function () {
    console.log("点菜");
}
//   吃
Customer.prototype.eat = function () {
    console.log("吃");
}

// 菜品类
function Dishes(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}