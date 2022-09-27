const{ Router } = require("express");
const notesRoute = Router();

const Note_Controller= require("../controlles/Note_Controller");

const notesController = new Note_Controller();
function myMiddleware (request,response,next){
 console.log("voce passou pelo midlleware")
 console.log(request.body);
 //if (!request.body.IsAdmin){
   // return response.json({message:"user nao-autorizado"})
 //}
 next();
}
notesRoute.get("/",notesController.index);

notesRoute.post("/:user_id",notesController.create);
notesRoute.get("/:id",notesController.show);
notesRoute.delete("/:id",notesController.delete);


module.exports = notesRoute;