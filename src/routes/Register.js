const router = require("express").Router();
const createUser = require('../controllers/createUser');

router.post("/", async (req, res) => {
  createUser(res, req.body);
  });
  module.exports = router;