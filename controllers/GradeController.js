import express from "express";
import * as GradeService from "../services/GradeService.js";
import { ok } from "../dtos/ok.js";
import { wrong } from "../dtos/wrong.js";

export function GradeController(app = express()) {
    app.post("/Grade", async (request, response) => {
        try {
            await GradeService.createGrade(request.body);
            response.status(201).send(ok('Create Grade', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Create Grade', 400))
        }
    })
    app.delete("/Grade/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await GradeService.deleteGrade(id);
            response.status(201).send(ok('Delete Grade', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Delete Grade', 400, undefined, e.meta.cause))
        }
    })
    app.put("/Grade/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await GradeService.updateGrade(request.body, id);
            response.status(201).send(ok('updated Grade', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Grade', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Grade/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            const result = await GradeService.getById(id);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Grade', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Grade", async (request, response) => {
        try {
            const set = request.body.set;
            console.log(set)
            const conditions = request.body;
            const result = await GradeService.getAllWithConditions(conditions, set);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Grade', 400, undefined, e.meta.cause))
        }
    })


    return app;
}