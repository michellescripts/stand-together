
exports.seed = function (knex, Promise) {
  return knex('teams').del()
    .then(function () {
      return knex('teams').insert([
        {name: '64'}
      ])
    })
}
