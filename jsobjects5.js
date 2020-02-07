const Product = function(name, type, cost) {
    this.name = name;
    this.type = type;
    this.cost = cost;
};

const Client = function(name, suname, money) {
    this.name = name;
    this.suname = suname;
    this.money = money;
};

const History = function(time, productName, productType, quantity, sum) {
    this.time = time;
    this.productName = productName;
    this.productType = productType;
    this.quantity = quantity;
    this.sum = sum;
}