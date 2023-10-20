const ApiError = require("../utils/apiError");

const checkOwnership = (req, res, next) => {
  try {
    const { shopId } = req.user;
    if (shopId !== parseInt(req.params.id)) {
      next(new ApiError("You not part of this shop", 401));
      return;
    }

    next();
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = checkOwnership;
