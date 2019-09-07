const db = require('../data/db-config');

module.exports = {
    find,
    findBydId,
    add,
    update,
    remove
};

function find() {
    return db('resource')
}

function findBydId(id) {
    return db('resource').where({ id }).first();
}

function add(user) {
    return db('resource').insert(user)
    .then(ids => {
        return findBydId(ids[0])
    });
}

function update(id, changes) {
    return db('resource').where({ id }).update(changes);
}

function remove(id) {
    return db('resource').where({ id }).del()
}