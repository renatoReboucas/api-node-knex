
exports.up = function (knex) {
  // cria as tabelas no metodo up
  return knex.schema.createTable('incidents', function (table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs')
  })

};

exports.down = function (knex) {
  //deleta as  tabelas no metodo down
  return knex.schema.dropTable('incidents')
};
