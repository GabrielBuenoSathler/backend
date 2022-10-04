const {Router} = require("express")
const userRoute = require("./users.routes")
const notesRoute = require("./notes.routes")
const tagsRoute = require("./tags.router")
const sessionsRouter =require("./sessions.routes")

const routes = Router();
routes.use("/sessions",sessionsRouter)
routes.use("/users",userRoute)
routes.use("/notes",notesRoute)
routes.use("/tags",tagsRoute)
module.exports = routes