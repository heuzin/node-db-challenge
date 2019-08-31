
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 128).notNullable();
      tbl.string('description');
      tbl.boolean("false").notNullable();
  })
  .createTable("resource", tbl => {
      tbl.increments();
      tbl.string('resource_name', 128).notNullable().unique();
      tbl.string('description');
  })
  .createTable('task', tbl => {
      tbl.increments();
      tbl.string('description', 128).notNullable();
      tbl.string('notes', 128);
      tbl.boolean('false').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('projects')
};
