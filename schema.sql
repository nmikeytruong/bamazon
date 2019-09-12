DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(77) NOT NULL,
    department_name VARCHAR(77) NOT NULL,
    price DECIMAL(11,2) NOT NULL,
    stock_quantity INT(11) NOT NULL,
    primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cyborg Usb Charger Cord", "Technology & Gadgets", 9.95, 400),
    ("Electronic Smawk Vape", "Technology & Gadgets", 64.95, 70),
    ("Redtooth Wireless Earbuds", "Technology & Gadgets", 35.99, 54),
    ("Professional Waiter's Corkscrew", "Kitchen & Dining", 10.95, 88),
    ("YumE Rice Cooker", "Kitchen & Dining", 53.10, 46),    
    ("World of Gitcraft PC", "Games", 59.99, 263),
    ("World of Gitcraft PS8", "Games", 59.99, 384),
    ("World of Gitcraft Y-Box", "Games", 59.99, 563),
    ("Pooropoly", "Games", 14.99, 875),
    ("Hobo Syle Fashion Half Shirt Unisex", "Apparel", 199.99, 6)
  
  
