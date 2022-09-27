const sqliteConnection = require('../../sqlite');
const createUser = require('./create_users')
async function migrationRun(){
    const schemas =[
        createUser
    ].join('');
    sqliteConnection().then(db => db.exec(schemas)).catch(error=>console.log(error));
    
    
}
module.exports= migrationRun;