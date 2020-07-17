const db = require("./db-config");

module.exports = {
    findResource,
    findProject,
    findTask,
    addResource,
    addProject,
    addTask,
};

function findResource() {
    return db("resource");
}
function findProject() {
    return db("project");
}
function findTask() {
    return db("task");
}

function getByIdProject(id) {
    return db("project").where({ id }).first();
}
function getByIdResource(id) {
    return db("resource").where({ id }).first();
}
function getByIdTask(id) {
    return db("task").where({ id }).first();
}

function addResource(resource) {
    return db("resource")
        .insert(resource)
        .then((ids) => {
            return getByIdResource(ids[0]);
        });
}
function addProject(project) {
    return db("project")
        .insert(project)
        .then((ids) => {
            return getByIdProject(ids[0]);
        });
}
function addTask(task) {
    return db("task")
        .insert(task)
        .then((ids) => {
            return getByIdTask(ids[0]);
        });
}
