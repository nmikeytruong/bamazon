# bamazon
Creator: Nam Truong
Type of Application: Amazon-like storefront

LINK: https://github.com/nmikeytruong/bamazon

Overview

In this bamazon application, users are given a list of items for them to choose from to buy. 
![nodeAppStart](https://nmikeytruong.github.io/bamazon/images/nodeAppStart.png)

Succesfully purchasing the item will update the stock quantity of item after purchase.
![successfulPurchase](https://nmikeytruong.github.io/bamazon/images/successfulPurchase.png)

If the user inputs an ID that isn't an option then they are prompted their item isn't in stock.
![notInStock](https://nmikeytruong.github.io/bamazon/images/notInStock.png)

If a user wants a quantity greater than what is in stock the user is alerted.
![insufficientQuantity](https://nmikeytruong.github.io/bamazon/images/insufficientQuantity.png)

Whenever the user wishes to "exit" the program they can do so by typing out "exit" anytime during the process. Typing out "exit" with uppercase or lowercanse doesn't matter since userInput.toLowerCase() === "exit" is set.
![userExit](https://nmikeytruong.github.io/bamazon/images/userExit.png)

Technologies Used:
Node
MySQL
Inquirer
Dotenv