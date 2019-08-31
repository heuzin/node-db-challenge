const db = require('../data/db-config');

module.exports = {
    find,
    findBydId,
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