# bamazon
Creator: Nam Truong
Type of Application: Amazon-like storefront

LINK: https://github.com/nmikeytruong/bamazon

Overview

In this bamazon application, users are given a list of items for them to choose from to buy. 
![nodeAppStart](https://github.com/nmikeytruong/bamazon/blob/master/images/nodeAppStart.png)

Succesfully purchasing the item will update the stock quantity of item after purchase.
![successfulPurchase](https://github.com/nmikeytruong/bamazon/blob/master/images/successfulPurchase.png)

If the user inputs an ID that isn't an option then they are prompted their item isn't in stock.
![notInStock](https://github.com/nmikeytruong/bamazon/blob/master/images/notInStock.png)

If a user wants a quantity greater than what is in stock the user is alerted.
![insufficientQuantity](https://github.com/nmikeytruong/bamazon/blob/master/images/insufficientQuantity.png)

Whenever the user wishes to "exit" the program they can do so by typing out "exit" anytime during the process. Typing out "exit" with uppercase or lowercanse doesn't matter since userInput.toLowerCase() === "exit" is set.
![userExit](https://github.com/nmikeytruong/bamazon/blob/master/images/userExit.png)

Technologies Used:
Node
MySQL
Inquirer
Dotenv