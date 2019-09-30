const routes = require("express").Router();

//const authMiddleware = require("./app/middleware/auth");

const calculadora = require("../demo-1/calculadora");

routes.post("/add", calculadora.adicionar);

// routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;