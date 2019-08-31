const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./projects/projects-router');
const RecouseRouter = require('./resource/resource-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/resource', RecouseRouter);

module.exports = server;
