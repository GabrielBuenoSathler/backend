exports.up = function(knex, Promise) {
    return knex.schema.createTable('links', function(t) {
        t.increments('id');
        t.text("url");
        t.integer("notes_id").references("id").inTable("notes").onDelete("CASCADE");
        t.timestamp('created_at').default(knex.fn.now());
        
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('links');
};