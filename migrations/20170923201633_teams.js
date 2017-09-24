
exports.up = function (knex, Promise) {
  return knex.schema.createTable('teams', function (table) {
    table.increments()
    table.string('name', 255)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('teams')
}
