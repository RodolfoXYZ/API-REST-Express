import express from "express";
import * as SubjectService from "../services/SubjectService.js";
import { ok } from "../dtos/ok.js";
import { wrong } from "../dtos/wrong.js";

export function SubjectController(app = express()) {
    app.post("/Subject", async (request, response) => {
        try {
            await SubjectService.createSubject(request.body);
            response.status(201).send(ok('Create Subject', 201))    
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Create Subject', 400))
        }
    })
    app.delete("/Subject/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await SubjectService.deleteSubject(id);
            response.status(201).send(ok('Delete Subject', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Delete Subject', 400, undefined, e.meta.cause))
        }
    })
    app.put("/Subject/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await SubjectService.updateSubject(request.body, id);
            response.status(201).send(ok('updated Subject', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Subject', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Subject/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            const result = await SubjectService.getById(id);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Subject', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Subject", async (request, response) => {
        try {
            const conditions = request.body;
            const result = await SubjectService.getAllWithConditions(conditions);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Subject', 400, undefined, e.meta.cause))
        }
    })


    return app;
}