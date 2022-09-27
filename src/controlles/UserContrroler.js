const { hash, compare }    = require("bcryptjs");
const AppError = require("../utils/error");

const sqliteConnection = require("../database/sqlite");
const { use } = require("../routes");
const userRoute = require("../routes/users.routes");

class UserController{
/*
 index = get lista registros
  show  - Get para exibir registros
  create - POst = Para criar um registro
  delete - delete para remover registro


*/
async create(request,response){

const {name,password,email} = request.body;
 const database = await sqliteConnection();
 const checkUserExists = await database.get("SELECT * FROM users  WHERE email= (?)", [email])
 if(checkUserExists){
   throw new AppError("esse email ja existe!")
 }
 const hashedPassword = await hash(password, 2);

 await database.run("INSERT INTO  users(nome,email,password)VALUES(?,?,?)", [name,email,hashedPassword]);
 return response.status(201).json();
}
async update (request,response){
  const {name,email,password,old_password} = request.body;
  const {id}= request.params;
  const database = await sqliteConnection();
  const user = await database.get("SELECT * FROM users WHERE id = (?)",[id]);
  if (!user){
    throw new AppError("Usuario nao encontrado");

  }
  const userWithUpdatedEmail = await  database.get("SELECT * FROM users WHERE email= (?)",[email]);
  if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
    throw new AppError("Este email ja esta em uso");
  }
  user.name = name ?? name;
  user.email = email ?? email;
  if (password && !old_password){
    throw new AppError("voce precisa informar a senha antiga");
  }
  if (password && old_password){
    const checkOldpassword = await compare(old_password, user.password)
  
  if (!checkOldpassword){
    throw new AppError("a senha antiga nao confere");
  }
}
  user.password = await hash(password,2);

  await database.run(`
  UPDATE users SET 
    nome = ?,
    email = ?,
    password = ?,  
    update_at = DATETIME('now')
    WHERE id = ?`,
    [user.name, user.email, user.password, id]
  );
 return response.json(200).json();
}
}

module.exports = UserController;