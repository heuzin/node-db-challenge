
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name: 'google', description: 'search resouce'},
        {resource_name: 'visual studio code'},
        {resource_name: 'meeting room'},
        {resource_name: 'react', description: 'install react'},
        {resource_name: 'redux', description: 'install redux'},
        {resource_name: 'knkex', description: 'install knex'}
      ]);
    });
};
