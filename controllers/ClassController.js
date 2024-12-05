import express from "express";
import * as ClassService from "../services/ClassService.js";
import { ok } from "../dtos/ok.js";
import { wrong } from "../dtos/wrong.js";

export function ClassController(app = express()) {
    app.post("/Class", async (request, response) => {
        try {
            await ClassService.createClass(request.body);
            response.status(201).send(ok('Create Class', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Create Class', 400))
        }
    })
    app.delete("/Class/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await ClassService.deleteClass(id);
            response.status(201).send(ok('Delete Class', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Delete Class', 400, undefined, e.meta.cause))
        }
    })
    app.put("/Class/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await ClassService.updateClass(request.body, id);
            response.status(201).send(ok('updated Class', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Class', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Class/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            const result = await ClassService.getById(id);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Class', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Class", async (request, response) => {
        try {
            const set = request.body.set;
            console.log(set)
            const conditions = request.body;
            const result = await ClassService.getAllWithConditions(conditions, set);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Class', 400, undefined, e.meta.cause))
        }
    })


    return app;
}