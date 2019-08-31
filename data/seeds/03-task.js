
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'creat an app for adding a shopping list', completed: 'false'},
        {description: 'an app that work as a calculator' , completed: 'false'},
        {description: 'use redux to add database' , completed: 'false'}
      ]);
    });
};
