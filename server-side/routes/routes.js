var router = require("express").Router();
var controller = require("../contollers/controllers");

router.get("/getAllProducts", controller.getAllProducts);

router.post("/addToCart", controller.addToCart);

router.post("/checkout", controller.checkout);

router.post("/addItems", controller.addItems);

router.get("/orders", controller.getOrders);

router.post("/action", controller.action);

module.exports.router = router;
