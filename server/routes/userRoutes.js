const userRoutes = require('express').Router()
const UserController = require ('../controllers/UserController')

userRoutes.post("/login", UserController.login);
userRoutes.post("/register", UserController.register);
userRoutes.get("/details", UserController.getUser);

module.exports = userRoutes