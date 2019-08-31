const express = require('express');

const Projects = require('./projects-model')

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
  .then(Projects => {
    res.json(Projects);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findBydId(id)
  .then(project => {

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
  .then(newproject => {
    res.status(201).json(newproject);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.update(id, changes)
  .then(project => {
    if (project) {
      res.json({ update: project });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update project' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete project' });
  });
});

router.get('/:id/resource', (req, res) => {
  const { id } = req.params;

  Projects.findResource(id)
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({ message: 'failed to get resource' })
  })
});

router.get('/:id/task', (req, res) => {
  const { id } = req.params;

  Projects.findTask(id)
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).json({ message: 'failed to get task' })
  })
});


module.exports = router;