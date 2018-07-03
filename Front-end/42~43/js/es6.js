// 餐厅类
class Restaurant {
     constructor(cash, seats, staff) {
        this.cash = cash;
        this.seats = seats;
        this.staff = staff;
    }
    hire(staff){
      this.staff.push(staff);
    }
    fire(staff){
      for(var i=0;i<this.staff.length;i++){
        if(this.staff[i] == staff)
          this.staff.splice(i,1);
      }
    }
  }
  var Id=0;
  // 职员类
  class Staff {
    constructor(name,salary){
      this.id = Id;
      this.name = name;
      this.salary = salary;
      Id++;
    }
    doJob(){
        console.log("完成一次工作");
    }
  }
  
  // 服务员类，继承自职员
  class Waiter extends Staff {
    constructor(job){
      super();
      this.job = job;
    }
    doJob(){
      if(this.job instanceof Array)
      Customer.order();
      else
        console.log("上菜");
    }
  }
  
  // 厨师类
  class Cook extends Staff {
    constructor(){
      super();
    }
    doJob(){
      console.log("做菜");
    }
  }
  
  // 顾客类
  class Customer {
    constructor(){
  
    }
    order(){
      console.log("点菜");
    }
    eat(){
      console.log("吃");
    }
  }
  
  // 菜品类
  class Dishes {
    constructor(name,cost,price){
      this.name = name;
      this.cost = cost;
      this.price = price;
    }
  }