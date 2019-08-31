const db = require('../data/db-config');

module.exports = {
    find,
    findBydId,
    add,
    update,
    remove
};

function find() {
    return db('task')
}

function findBydId(id) {
    return db('task').where({ id }).first();
}

function add(user) {
    return db('task').insert(user)
    .then(ids => {
        return findBydId(ids[0])
    });
}

function update(id, changes) {
    return db('task').where({ id }).update(changes);
}

function remove(id) {
    return db('task').where({ id }).del()
}