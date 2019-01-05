DROP DATABASE IF EXISTS bamazon_db;
create database bamazon_db;
use bamazon_db;
create table products(
item_id integer (11) NOT NULL auto_increment,
product_name varchar(50), 
department_name varchar(50),
price float(10,2),
stock_quantity integer (20),
Primary KEY(item_id)
);

insert into products(item_id,product_name,department_name,price,stock_quantity)
values("basketball","sports",10.50,100),
("football","sports",11.00,200),
("tennis ball","sports",2.50,500),
("running shirt", "active wear",24.50,150),
("running shorts","active wear",24.50,40),
("hat","outer wear", 6.50, 250),
("gloves","outer wear", 10.00, 55),
("screw driver", "tools", 4.50, 125),
("hammer","tools", 6.00, 300),
("solder iron", "tools", 21.00, 400); 


