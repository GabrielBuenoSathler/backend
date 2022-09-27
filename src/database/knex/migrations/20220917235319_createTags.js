exports.up = function(knex, Promise) {
    return knex.schema.createTable('tags', function(t) {
        t.increments('id')
        t.text("url");
        t.text("name").notNullable();
        t.integer("notes_id").references("id").inTable("notes").onDelete("CASCADE");
        t.text("user_id").references("id").inTable("users")
        
        
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tags');
};