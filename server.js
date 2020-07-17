const express = require("express");
const helmet = require("helmet");
const db = require("./helperFunction");

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/api/project", (req, res) => {
    db.findProject()
        .then((project) => {
            res.status(200).json(project);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get project" });
        });
});
server.get("/api/resource", (req, res) => {
    db.findResource()
        .then((resource) => {
            res.status(200).json(resource);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get resource" });
        });
});
server.get("/api/task", (req, res) => {
    db.findTask()
        .then((task) => {
            res.status(200).json(task);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get task" });
        });
});

server.post("/api/project", (req, res) => {
    const projectData = req.body;

    db.addProject(projectData)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new project" });
        });
});
server.post("/api/resource", (req, res) => {
    const resourceData = req.body;

    db.addResource(resourceData)
        .then((r) => {
            res.status(201).json(r);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new resource" });
        });
});
server.post("/api/task", (req, res) => {
    const taskData = req.body;

    db.addTask(taskData)
        .then((task) => {
            res.status(201).json(task);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to create new task" });
        });
});

module.exports = server;
