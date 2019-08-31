
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'creat an app for adding a shopping list', completed: 'false', project_id: 1},
        {description: 'an app that work as a calculator' , completed: 'false', project_id: 2},
        {description: 'use knex to add database' , completed: 'false', project_id: 3}
      ]);
    });
};
