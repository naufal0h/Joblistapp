const route = require('express').Router()

route.get('/', (req, res) => {
    res.status(200).json({
        message : "Dashboard APP API"
    })

});

const userRoutes = require("./userRoutes")
const jobRoutes = require("./jobRoutes")

route.use('/users', userRoutes)
route.use('/jobs', jobRoutes)


module.exports = route