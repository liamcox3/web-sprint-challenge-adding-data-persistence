exports.up = function (knex) {
    return knex.schema
        .createTable("project", (tbl) => {
            tbl.increments();
            tbl.string("name").notNullable();
            tbl.text("description");
            tbl.boolean("isComplete").notNullable().defaultTo("false");
        })
        .createTable("resource", (tbl) => {
            tbl.increments();
            tbl.string("name").unique().notNullable();
            tbl.text("description");
        })
        .createTable("task", (tbl) => {
            tbl.increments();
            tbl.text("description").notNullable();
            tbl.text("notes");
            tbl.boolean("isComplete").notNullable().defaultTo("false");
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("project")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
        .createTable("project_resource", (tbl) => {
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("project")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            tbl.integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("resource")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("project_resource")
        .dropTableIfExists("task")
        .dropTableIfExists("resource")
        .dropTableIfExists("project");
};
