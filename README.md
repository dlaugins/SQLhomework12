# SQLhomework12
Overview
In this activity,we are creating an Amazon-like storefront using MySQL skills. The app will take in orders from customers and deplete stock from the store's inventory. 

Process to complete the app

I created a MySQL Database called bamazon. I then created a table inside of the database called prodcuts. The table has the following columns: item_id (unique id for each product),
product_name (Name of product), department_name, price (cost to customer), stock_quantity (how much of the product is available in stores). I populated the database with 10 different products. 



I created a Node application called bamazonCustomer.js. The application will display the items available for sale. The app will prompt the users with 2 messages: What is the ID the user would like to buy and How many of the item the user would like to buy. The application will check if the store has enough product to meet demand. If it does not, there will be an error message. A screenshot is below:

Denise@DESKTOP-M2T1598 MINGW64 ~/Dropbox/work_at_home/aaa_denise_utbootcamp/Code/SQLhomework12 (master)
$ node bamazonCustomer.js
connected as id: 37
id: 1, Product: basketball, quantity: 100, price 10.5
id: 2, Product: football, quantity: 200, price 11
id: 3, Product: tennis ball, quantity: 500, price 2.5
id: 4, Product: running shirt, quantity: 150, price 24.5
id: 5, Product: running shorts, quantity: 40, price 24.5
id: 6, Product: hat, quantity: 250, price 6.5
id: 7, Product: gloves, quantity: 55, price 10
id: 8, Product: screw driver, quantity: 125, price 4.5
id: 9, Product: hammer, quantity: 300, price 6
id: 10, Product: solder iron, quantity: 400, price 21
? What is the ID of the item you wish to buy? 5
? How many would you like to buy? 50
5 'running shorts' 40
There is not enough stock

If there is enough demand, the order will be fufilled and the quanitity will be removed from the database. A screenshot is below:

Denise@DESKTOP-M2T1598 MINGW64 ~/Dropbox/work_at_home/aaa_denise_utbootcamp/Code/SQLhomework12 (master)
$ node bamazonCustomer.js
id: 1, Product: basketball, quantity: 0, price 10.5
id: 2, Product: football, quantity: 49, price 11
id: 3, Product: tennis ball, quantity: 60, price 2.5
id: 4, Product: running shirt, quantity: 15, price 24.5
id: 5, Product: running shorts, quantity: 32, price 24.5
id: 6, Product: hat, quantity: 250, price 6.5
id: 7, Product: gloves, quantity: 55, price 10
id: 8, Product: screw driver, quantity: 125, price 4.5
id: 9, Product: hammer, quantity: 300, price 6
id: 10, Product: solder iron, quantity: 400, price 21
? What is the ID of the item you wish to buy? 2
? How many would you like to buy? 5
You have successfully ordered your product
You bought  5 footballs for $ 484
The amount in stock changed from 49 to 44


Part2

I completed part 2 which lets the manager choose between View Products for Sale,View Low Inventory, Add to Inventory, and Add New Product.

1) Screenshot of Products for sale:

? Manager Options View Products for Sale
{ action: 'View Products for Sale' }
item_id  product_name    department_name  price  stock_quantity
-------  --------------  ---------------  -----  --------------
1        basketball      sports           10.5   100
2        football        sports           11     44
3        tennis ball     sports           2.5    60
4        running shirt   active wear      24.5   15
5        running shorts  active wear      24.5   32
6        hat             outer wear       6.5    250
7        gloves          outer wear       10     55
8        screw driver    tools            4.5    125
9        hammer          tools            6      300
10       solder iron     tools            21     400
11       swim            sport            40     300
12       ball            sports           30     300
13       ball            sports           30     300

? Manager Options (Use arrow keys)
> View Products for Sale
  View Low Inventory
  Add to Inventory
  Add New Product

2) Screenshot of view Low inventory (I told it to show items with inventory less than 20)

 Manager Options View Low Inventory
{ action: 'View Low Inventory' }
? Manager Options (Use arrow keys)
> View Products for Sale
  View Low Inventory
  Add to Inventory
  Add New Product
item_id  product_name   department_name  price  stock_quantity
-------  -------------  ---------------  -----  --------------
4        running shirt  active wear      24.5   15

3) Screenshot of Add to Inventory
 Manager Options Add to Inventory
{ action: 'Add to Inventory' }
? Add more inventory to what item? 5
? How much inventory to you want to add? 20
{ itemnumber: '5', inventory: '20' }
3240
item_id  product_name    department_name  price  stock_quantity
-------  --------------  ---------------  -----  --------------
1        basketball      sports           10.5   100
2        football        sports           11     44
3        tennis ball     sports           2.5    60200
4        running shirt   active wear      24.5   15
5        running shorts  active wear      24.5   3240
6        hat             outer wear       6.5    250
7        gloves          outer wear       10     55
8        screw driver    tools            4.5    125
9        hammer          tools            6      300
10       solder iron     tools            21     450
11       swim            sport            40     300
12       ball            sports           30     300
13       ball            sports           30     300

? Manager Options (Use arrow keys)
> View Products for Sale
  View Low Inventory
  Add to Inventory
  Add New Product
4) Screenshot of add new item to the database. I added a swimsuit.
? Manager Options Add New Product
{ action: 'Add New Product' }
? What is the name of the product you want to add? swimsuit
? What department is the product in? sports
? What is the price of the item? 25.00
? What is the original stock quantity for the item? 300
{ productname: 'swimsuit',
  departmentname: 'sports',
  price: '25.00',
  stockquantity: '300' }
? Manager Options (Use arrow keys)
? Manager Options View Products for Sale
{ action: 'View Products for Sale' }
item_id  product_name    department_name  price  stock_quantity
-------  --------------  ---------------  -----  --------------
1        basketball      sports           10.5   100
2        football        sports           11     44
3        tennis ball     sports           2.5    60200
4        running shirt   active wear      24.5   15
5        running shorts  active wear      24.5   3240
6        hat             outer wear       6.5    250
7        gloves          outer wear       10     55
8        screw driver    tools            4.5    125
9        hammer          tools            6      300
10       solder iron     tools            21     450
11       swim            sport            40     300
12       ball            sports           30     300
13       ball            sports           30     300
14       swimsuit        sports           25     300

