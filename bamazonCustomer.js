// npm packages
require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var keys = require("./keys.js");


// connection to sync with MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys.password,
  database: "bamazon"
});

// creates server connection and then loads products
connection.connect(function(err) {
  if (err) {
    console.error("Connection Error: " + err.stack);
  }
  loadProducts();
});

// function to load products
function loadProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    // creating a table layout from response
    console.table(res);

    promptID(res);
  });
}

// function prompt for ID of product they would like to buy
function promptID(stock) {
  inquirer.prompt([
    {
      type: "input",
      name: "userInput",
      message: "What is the ID of the product you would you like to buy? [type 'exit' to Exit]",
      validate: function(val) {
        return !isNaN(val) || val.toLowerCase() === "exit";
      }
    }
  ])
    .then(function(val) {
      // user exit optional
      userExit(val.userInput);
      var userInputID = parseInt(val.userInput);
      var product = checkStock(userInputID, stock);

      // if valid chosen item ID prompt user for the quantity of said item
      if (product) {
        promptQuantity(product);
      }
      else {
        // else let user know that item is not in stock
        console.log("\nThat item is not in stock.");
        loadProducts();
      }
    });
}

// function prompt for quantity user wants
function promptQuantity(product) {
  inquirer.prompt([
    {
      type: "input",
      name: "quantity",
      message: "How many units of the product would you like? [type 'exit' to Exit]",
      validate: function(val) {
        return val > 0 || val.toLowerCase() === "exit";
      }
    }
  ])
  .then(function(val) {
    userExit(val.quantity);
    var quantity = parseInt(val.quantity);
        
    // stock quantity check
    if (quantity > product.stock_quantity) {
      console.log("\nInsufficient quantity!");
      loadProducts();
    }
    else {
      // if enough quantity in stock run fullfillOrder passing through product and quantity
      fulfillOrder(product, quantity);
    }
  });
}

// function for user to exit the process
function userExit(userInput) {
  if (userInput.toLowerCase() === "exit") {
    console.log("*Waves* Come back soon!");
    process.exit(0);
  }
}

// function to see if item ID user chose is in stock
function checkStock(userInputID, stock) {
  for (var i = 0; i < stock.length; i++) {
    if (stock[i].item_id === userInputID) {
      return stock[i];
    }
  }
  return null;
}

// function to finalize order
function fulfillOrder(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
      loadProducts();
    }
  );
}




