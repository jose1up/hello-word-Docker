const { Router } = require("express");
const routes = Router();

routes.get("/", (req, res) => {
  res.send({msg: "Welcome"});
});

module.exports = routes;
