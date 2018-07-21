// 餐厅类
// let staff = [];
class Restaurant {
    constructor(cash, seats) {
        this.cash = cash;
        this.seats = seats;
        // this.staff = staff;
        console.log("餐馆开始工作");
    }
    // hire(str, staffname) {
    //     if (str == "cook") {
    //         console.log("餐馆雇佣了厨师" + staffname);
    //         staff[0] = staffname;
    //     } else if (str == "waiter") {
    //         console.log("餐馆雇佣了服务员" + staffname);
    //         staff[1] = staffname;
    //     }
    // }
    // fire(str, staffname) {
    //     if (str == "cook" && staff[0] == staffname) {
    //         staff[0] = '';
    //         console.log("餐馆解雇了厨师" + staffname);
    //     } else if (str == "waiter" && staff[1] == staffname) {
    //         staff[1] = '';
    //         console.log("餐馆解雇了服务员" + staffname);
    //     }
    // }
}
let restaurant = new Restaurant(5, 1);
// restaurant.hire("cook", "姬动");
// restaurant.hire("waiter", "烈焰");
let Id = 0;
// 职员类
class Staff {
    constructor(name, salary) {
        this.id = Id;
        this.name = name;
        this.salary = salary;
        Id++;
    }
    doJob() {
        console.log(this.name + "完成一次工作");
    }
}
// 服务员类，继承自职员
class Waiter extends Staff {
    constructor(name) {
        super(name);
        this.name = name;
        this.job = "服务员";
    }
    dowork(work) {
        if (Array.isArray(work) == true) {
            let flag = Math.floor(Math.random() * 3);
            console.log(this.name + "服务员受理客人点菜：" + work[flag]);
            console.log(this.name + "服务员通知厨师做菜：" + work[flag]);
            return flag;
        } else {
            console.log("服务员" + this.name + "上菜" + work);
        }
    }
    static getinstance(name) {
        if (!this.instance) {
            this.instance = new Waiter(name);
        }
        return this.instance;
    }
}

// 厨师类
class Cook extends Staff {
    constructor(name) {
        super(name);
        this.name = name;
        this.job = "厨师";
    }
    cook(work) {
        console.log("厨师" + this.name + "烹饪了" + work);
    }

    static getinstance(name) {
        if (!this.instance) {
            this.instance = new Cook(name);
        }
        return this.instance;
    }
}

// 顾客类
class Customer {
    constructor(name) {
        this.name = name;
    }
    comein() {
        console.log("欢迎客人" + "——" + this.name + "——" + "进店");
    }
    eat(food) {
        console.log("客人" + this.name + "正在吃" + food);
    }
    leave() {
        console.log("客人" + "——" + this.name + "——" + "走了");
    }
}

let menu = ["宫保鸡丁", "红烧肉", "鱼香肉丝"];
let peo = ["张三", "李四", "巫舞"];
let coco = Waiter.getinstance("姬动");
let andy = Cook.getinstance("烈焰");
for (let i in peo) {
    let peolist = [];
    peolist[i] = new Customer(peo[i]);
    peolist[i].comein();

    let j = coco.dowork(menu);

    andy.cook(menu[j]);
    coco.dowork(menu[j])
    peolist[i].eat(menu[j]);

    peolist[i].leave();
    console.log("——————————————————————");
}