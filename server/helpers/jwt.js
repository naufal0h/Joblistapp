const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_CODE || 'check';

const gettoken = (data) => {
  const { id, username, email, image } = data;
  return jwt.sign({ id, username, email, image }, secretKey);
};

const tokenVerifier = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { gettoken, tokenVerifier };
