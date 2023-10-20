const router = require("express").Router();

const Product = require("../controller/productController");

const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkOwnership = require("../middlewares/checkOwnershop");
const checkRole = require("../middlewares/checkRole");

router.post("/", autentikasi, upload.single("image"), Product.createProduct);
router.get("/", autentikasi, checkRole("Owner"), Product.findProducts);
router.get("/:id", Product.findProductById);
router.patch("/:id", Product.UpdateProduct);
router.delete("/:id", Product.deleteProduct);

module.exports = router;