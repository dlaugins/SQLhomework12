var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    console.log("connected as id: " + connection.threadId)
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        res.forEach(element => {
            console.log("id: " + element.item_id
                + ", Product: " + element.product_name +
                ", quantity: " + element.stock_quantity +
                ", price " + element.price
            );
        });
        //console.log(res);
        // connection.end();

        order();
    });
}
var order = function () {
    inquirer.prompt([{
        name: "buyItem",
        type: "input",
        message: "What is the ID of the item you wish to buy?"
    }, {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?"
    }]).then(function (answer) {
        buyItem(answer.buyItem, answer.quantity)

        // console.log("Your item was successfully ordered")
    })
}

function buyItem(buyItem, quantity) {
    connection.query("SELECT item_id, product_name, stock_quantity FROM products where item_id = " + buyItem, function (err, res) {
		if(err)throw err;
        console.log(res[0].item_id, res[0].product_name, res[0].stock_quantity);
        if (quantity > res[0].stock_quantity) {
            console.log("There is not enough stock");
        }
        else {
            console.log("You have successfully ordered your product");
            var newQuantity = res[0].stock_quantity - quantity;
            modifyRecord(buyItem, newQuantity);
        }
        // 
        // afterConnection();

    });

}

function modifyRecord(buyItem, newQuantity) {
   
    var sql="Update products SET stock_quantity =" + newQuantity + " WHERE item_id = " + buyItem;
    
    connection.query(sql, function (err, res) {
		if(err)throw err;
        afterConnection();
        console.log(buyItem, newQuantity)
    })
}
