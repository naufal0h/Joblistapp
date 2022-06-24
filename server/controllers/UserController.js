const { User } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { gettoken } = require("../helpers/jwt");

class UserController {
  static async login(req, res) {
    const { username, password } = req.body;
    try {
      let usernameFound = await User.findOne({
        where: { username },
      });
      if (usernameFound) {
        if (decrypt(password, usernameFound.password)) {
          let token = gettoken(usernameFound);
          res.status(200).json({ message: "Logged In!", token });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error logging in" });
    }
  }
  static async register(req, res) {
    const { username, email, password, image } = req.body;
    try {
      await User.create({ username, email, password, image });
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error creating user" });
    }
  }
  static async getUser(req, res) {
    const id = req.params.id;
    try {
      let user = await User.findOne({ where: { id: id } });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error getting user" });
    }
  }
}

module.exports = UserController;
