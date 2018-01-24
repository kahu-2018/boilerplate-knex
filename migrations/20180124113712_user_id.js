
exports.up = function(knex, Promise) {
  return knex.schema.table('profiles', t => {
      t.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('profiles', t =>{
    t.dropColumn('user_id')
 })

};
