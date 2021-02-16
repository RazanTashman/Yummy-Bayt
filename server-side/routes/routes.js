var router = require("express").Router();
var controller = require("../contollers/controllers");

router.get("/getAllProducts", controller.getAllProducts);

router.post("/addToCart", controller.addToCart);

router.post("/checkout", controller.checkout);

router.post("/addItems", controller.addItems);

router.get("/orders", controller.getOrders);


module.exports.router = router;
