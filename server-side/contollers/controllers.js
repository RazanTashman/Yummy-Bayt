const express = require("express");
var connection = require("../models/db");
var model = require("../models/model");

console.log("outsiide controllers");
module.exports = {
  // get all data from products

  getAllProducts: (req, res) => {
    model.getAllProducts(function (err, results) {
      if (err) {
        console.log("error in product controller", err);
      }
      console.log("Controllleeeer");
      res.json(results);
    });
  },

  // add to cart

  addToCart: (req, res) => {
    var params = [req.body.productID, req.body.quantity,req.body.orderID];
    model.addToCart(params,function (err, results) {
      if (err) {
        console.log("error in cart controller", err);
      }
      console.log("Controllleeeer");
      res.json(results);
    });
  },

  // checkout
   checkout: (req, res) => {
     var params = [req.body.userID, req.body.totalAmount, req.body.payment, req.body.delivery, req.body.deliveryTime, req.body.orderNumber, req.body.orderDate, req.body.address, req.body.Notes, req.body.status, req.body.phoneNumber];
     model.checkout(params, function (err, results) {
      if (err) {
        console.log("error in checkout controller", err);
      }
      console.log("success in checkout controller");
      res.json(results);
     });
   },
 
  //Adding items to the menu
   addItems: (req, res) => {
    var data = [req.body.productName, req.body.productPrice, req.body.description, req.body.category, req.body.image]
    model.addItems(data, function (err, results) {
     if (err) {
       console.log("error in adding items controller", err);
     }
     console.log("success in adding items controller");
     res.json(results);
    });
  },

  getOrders: (req, res) => {
    model.getOrders(function (err, results) {
      if (err) {
        console.log("error in get Orders controller", err);
      }
      console.log("success in get Orders controller");
      res.json(results);
    });
  },


  action: (req, res) => {
    var data = req.body
    console.log("..........controller", data);

    model.action(data, function (err, results) {
     if (err) {
       console.log("error in adding items controller", err);
     }
     console.log("success in adding items controller");
     res.json(results);
    });
  },



};


