var connection = require("./db");

module.exports = {
  // get all products
  getAllProducts: (callback) => {
    var queryStr = "SELECT * FROM products ";
    console.log("Modeeeeeel");
    connection.query(queryStr, function (err, result) {
      callback(err, result);
      console.log("errror", err);
    });
  },

  // add to cart
  addToCart: (params, callback) => {
    var queryStr = "Insert into cart (productID, quantity, orderID) values (?,?,?)";
    connection.query(queryStr, params, function (err, result) {
      callback(err, result);
      console.log("errror", err);
    });
  },

  //checkout
  checkout: (params, callback) => {
    var queryStr = "Insert into orders (userID, totalAmount, payment, delivery, deliveryTime, orderNumber, orderDate, address, Notes, status, phoneNumber) values (?,?,?,?,?,?,?,?,?,?,?)";
    connection.query(queryStr, function (err, result) {
      callback(err, result);
      console.log("error", err);
    });
  },

  // Adding items to the menu
  addItems: (data, callback) => {
    var queryStr = "Insert into products (productName, productPrice, description, category, image) values (?,?,?,?,?)";
    connection.query(queryStr, data, function (err, result) {
      callback(err, result);
      console.log("error", err);
    });
  },

  getOrders: (callback) => {
   
    var queryStr = " SELECT  orders.*, user.* FROM orders  INNER JOIN user ON  orders.userID = user.userId ";
    connection.query(queryStr, function (err, result) {
      callback(err, result);
      console.log("error", err);
    });
  },
};
