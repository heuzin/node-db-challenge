const db = require('../data/db-config');

module.exports = {
    find,
    findBydId,
    findResource,
    findTask,
    add,
    update,
    remove
};

function find() {
    return db('projects')
}

function findBydId(id) {
    return db('projects').where({ id }).first();
}

function findResource(project_id) {
    return  db('resource as r')
        .join('projects as p', 'p.id', 'r.project_id')
        .select('r.id', 'r.resource_name', 'r.description', 'p.project_name')
        .where({ project_id })
}

function findTask(project_id) {
    return  db('task as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('t.id', 't.description', 't.notes', 't.completed', 'p.project_name')
        .where({ project_id })
}

function add(user) {
    return db('projects').insert(user)
    .then(ids => {
        return findBydId(ids[0])
    });
}

function update(id, changes) {
    return db('projects').where({ id }).update(changes);
}

function remove(id) {
    return db('projects').where({ id }).del()
}