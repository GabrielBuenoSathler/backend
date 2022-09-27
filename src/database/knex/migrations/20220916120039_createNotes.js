exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function(t) {
        t.increments('id').onDelete("CASCADE");
        t.text("title");
        t.text("description");
        t.timestamp('update_at').default(knex.fn.now());
        t.timestamp('created_at').default(knex.fn.now());
        t.integer("user_id").references("id").inTable("users")
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notes');
};