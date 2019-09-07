const express = require('express');

const Task = require('./task-model')

const router = express.Router();

router.get('/', (req, res) => {
    Task.find()
  .then(task => {
    res.json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get task' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Task.findBydId(id)
  .then(task => {

    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: 'Could not find task with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get task' });
  });
});

router.post('/', (req, res) => {
  const taskData = req.body;

  Task.add(taskData)
  .then(newtask => {
    res.status(201).json(newtask);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Task.update(id, changes)
  .then(task => {
    if (task) {
      res.json({ update: task });
    } else {
      res.status(404).json({ message: 'Could not find task with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update task' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Task.remove(id)
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find task with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete task' });
  });
});

module.exports = router;