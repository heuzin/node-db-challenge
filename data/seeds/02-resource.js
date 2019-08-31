
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name: 'google', description: 'search resouce', project_id: 1},
        {resource_name: 'visual studio code', project_id: 3},
        {resource_name: 'meeting room', project_id: 2},
        {resource_name: 'react app', description: 'install react', project_id: 1},
        {resource_name: 'redux app', description: 'install redux', project_id: 2},
        {resource_name: 'knkex app', description: 'install knex', project_id: 3}
      ]);
    });
};
