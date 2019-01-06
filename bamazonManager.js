var mysql = require('mysql');
var inquirer = require('inquirer');
const cTable = require('console.table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    console.log("connected as id: " + connection.threadId)
    ProductForSale();
});

var runSearch = function () {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Manager Options",
        choices: [
            "View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"
        ]
    }).then(function (answer) {
        console.log(answer);
        switch (answer.action) {
            case 'View Products for Sale':

                ProductForSale()
                break;

            case "View Low Inventory":
                ViewLowInventory()
                break;

            case "Add to Inventory":
                AddToInventory()
                break;

            case "Add New Product":
                AddNewProduct()
                break;
            default:
                console.log("unknown function")
                break;
        }
    })
}

var ProductForSale = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // res.forEach(element => {
        // console.log("id: " + element.item_id
        //     + ", Product: " + element.product_name +
        //     ", quantity: " + element.stock_quantity +
        //     ", price " + element.price
        // );
        console.table(res);

        // });
        runSearch()
    });
}
var ViewLowInventory = function () {
    query = "Select * FROM products Where stock_quantity < 20";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("");
        console.table(res);
        
    })
    // runSearch();
    
   
}

var AddToInventory = function () {
    inquirer.prompt([{
        name: "itemnumber",
        type: "input",
        message: "Add more inventory to what item?"
    }, {
        name: "inventory",
        type: "input",
        message: "How much inventory to you want to add?"
    }]).then(function (answer) {
        console.log(answer);
        var query = "Select product_name, stock_quantity FROM products where item_id =" + answer.itemnumber
        connection.query(query, function (err, res) {
            if (err) throw err;
            var newQuantity = Number(res[0].stock_quantity) + Number(answer.inventory);
            console.log(newQuantity);
            modifyRecord(answer.itemnumber, newQuantity);
            // console.log("The amount in stock changed from " + res[0].stock_quantity + " to " + newQuantity);
        })
    })
    // runSearch();
}
var AddNewProduct = function () {
    inquirer.prompt([{
        name: "productname",
        type: "input",
        message: "What is the name of the product you want to add?"
    }, {
        name: "departmentname",
        type: "input",
        message: "What department is the product in?"
    }, {
        name: "price",
        type: "input",
        message: "What is the price of the item?"
    }, {
        name: "stockquantity",
        type: "input",
        message: "What is the original stock quantity for the item?"
    }

    ]).then(function (answer) {
        console.log(answer);
        var sql = 'INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES  ("'+answer.productname+'","'+answer.departmentname+'", "'+answer.price+'", "'+answer.stockquantity+'")';
        connection.query(sql, function (err, res) {
    if (err) throw err;
    console.log("1 record inserted");
  });
runSearch();
    })
}

function modifyRecord(buyItem, newQuantity) {
   
    var sql="Update products SET stock_quantity =" + newQuantity + " WHERE item_id = " + buyItem;
    
    connection.query(sql, function (err, res) {
		if(err)throw err;
     ProductForSale();
       
    })
}
