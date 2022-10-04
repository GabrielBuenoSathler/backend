const { Router } = require("express");
const sessionsController = require("../controlles/sessionsController")
const SessionsController = new sessionsController();

const sessionsRoutes= Router();
sessionsRoutes.post("/",SessionsController.create);
module.exports = sessionsRoutes;
