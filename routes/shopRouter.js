const router = require("express").Router();

const Shop = require("../controller/shopController");
const authenticate = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkOwnership = require("../middlewares/checkOwnershop");
const checkId = require("../middlewares/checkId");

router.route("/").get(Shop.findShops).post(Shop.createShop);
router
  .route("/:id")
  .get(
    checkId(),
    authenticate,
    checkRole("Owner"),
    checkOwnership,
    Shop.findShopById
  )
  .patch(
    checkId(),
    authenticate,
    checkRole("Owner"),
    checkOwnership,
    Shop.updateShop
  )
  .delete(Shop.deleteShop);

module.exports = router;
