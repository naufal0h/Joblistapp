const { tokenVerifier } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  const getToken = req.headers.get_token;

  if (getToken) {
    try {
      let verifyToken = tokenVerifier(getToken);

      req.userData = verifyToken;
      next();
    } catch (err) {
      res.status(401).json({
        message: `Token not verify`,
      });
    }
  } else {
    res.status(403).json({
      message: "token not found",
    });
    next();
  }
};

module.exports = authentication;