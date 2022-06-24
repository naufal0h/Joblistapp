const jobRoutes = require('express').Router()
const JobController = require ('../controllers/JobController')

jobRoutes.get("/", JobController.getJobList);
jobRoutes.get("/:id", JobController.getJobDetails);

module.exports = jobRoutes