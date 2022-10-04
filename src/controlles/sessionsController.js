
const knex = require ("../database/knex")
const AppError = require("../utils/error")
const {compare } = require("bcryptjs");

class sessionsController{
    async create(request,response){
        const {email, password} = request.body;
        const user = await knex("users").where({email}).first();
        
        if (!user){
            throw new AppError("email ou senha incorretas");
        }
        const passwordMatched = await compare(password,user.password)
        return response.json(user);

    }
}
module.exports = sessionsController;