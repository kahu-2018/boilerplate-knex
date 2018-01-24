
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', (t) => {
    t.increments('id')
    t.string('url')
    t.string('picture')
    t.timestamps()
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles')
};
