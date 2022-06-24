const bcrypt = require("bcrypt");
const salt = Number(process.env.SALT_ROUND || 5);

const encrypt = (password) => {
  return bcrypt.hashSync(password, salt);
};

const decrypt = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = { encrypt, decrypt };
