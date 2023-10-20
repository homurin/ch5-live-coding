const ApiError = require("../utils/apiError");
const { Shop } = require("../models");

const checkId = () => {
  return async (req, res, next) => {
    try {
      const shopId = req.params.id;
      const isShopExist = await Shop.findByPk(shopId);
      console.log(isShopExist);
      if (!isShopExist) {
        next(new ApiError("Shop not found"));
      }
      next();
    } catch (err) {
      next(new ApiError(err.message, 500));
    }
  };
};

module.exports = checkId;
