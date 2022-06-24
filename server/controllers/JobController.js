const axios = require("axios");

class JobController {
  static async getJobList(req, res) {
    try {
      let response = await axios({
        method: "GET",
        url: "http://dev3.dansmultipro.co.id/api/recruitment/positions.json",
      });
      res.status(200).send(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error getting jobs" });
    }
  }
  static async getJobDetails(req, res) {
    const id = req.params.id;
    try {
      let response = await axios({
        method: "GET",
        url: `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`,
      });
      res.status(200).send(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error getting job details" });
    }
  }
}

module.exports = JobController;
