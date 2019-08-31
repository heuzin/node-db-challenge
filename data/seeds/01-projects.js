
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'react', description: 'create a react app', completed: 'false'},
        {project_name: 'redux', description: 'create redux app', completed: 'true'},
        {project_name: 'knex', description: 'databse knex project', completed: 'true'}
      ]);
    });
};
