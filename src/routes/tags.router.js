const{ Router } = require("express");
const tagsRoute = Router();

const TagsController= require("../controlles/tagsController");

const tags_Controller = new TagsController();
function myMiddleware (request,response,next){
 console.log("voce passou pelo midlleware")
 console.log(request.body);
 //if (!request.body.IsAdmin){
   // return response.json({message:"user nao-autorizado"})
 //}
 next();
}
tagsRoute.get("/:user_id",tags_Controller.index);


module.exports = tagsRoute;