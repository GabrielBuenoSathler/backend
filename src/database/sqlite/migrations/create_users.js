const createUser = `CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY AUTOINCREMENT,
     nome VARCHAR, email VARCHAR 
    , password VARCHAR,
     avatar VARCHAR NULL, 
     create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     , update_at  DEFAULT CURRENT_TIMESTAMP);`

module.exports = createUser;