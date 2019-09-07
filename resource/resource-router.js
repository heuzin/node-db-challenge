const express = require('express');

const Resource = require('./resource-model')

const router = express.Router();

router.get('/', (req, res) => {
    Resource.find()
  .then(Resource => {
    res.json(Resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get Resource' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Resource.findBydId(id)
  .then(resource => {

    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({ message: 'Could not find resource with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resource' });
  });
});

router.post('/', (req, res) => {
  const resourceData = req.body;

  Resource.add(resourceData)
  .then(newresource => {
    res.status(201).json(newresource);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Resource.update(id, changes)
  .then(resource => {
    if (resource) {
      res.json({ update: resource });
    } else {
      res.status(404).json({ message: 'Could not find resource with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update resource' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Resource.remove(id)
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find resource with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete resource' });
  });
});

module.exports = router;