const{ Router } = require("express");
const userRoute = Router();

const UserController = require("../controlles/UserContrroler");
const userController = new UserController();
function myMiddleware (request,response,next){
 console.log("voce passou pelo midlleware")
 console.log(request.body);
 //if (!request.body.IsAdmin){
   // return response.json({message:"user nao-autorizado"})
 //}
 next();
}
userRoute.use(myMiddleware)
userRoute.post("/",myMiddleware,userController.create);
userRoute.put("/:id",userController.update);   
module.exports = userRoute;