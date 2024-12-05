import express from "express";
import * as TeacherService from "../services/TeacherService.js";
import { ok } from "../dtos/ok.js";
import { wrong } from "../dtos/wrong.js";

export function TeacherController(app = express()) {
    app.post("/Teacher", async (request, response) => {
        try {
            await TeacherService.createTeacher(request.body);
            response.status(201).send(ok('Create Teacher', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Create Teacher', 400))
        }
    })
    app.delete("/Teacher/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await TeacherService.deleteTeacher(id);
            response.status(201).send(ok('Delete Teacher', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Delete Teacher', 400, undefined, e.meta.cause))
        }
    })
    app.put("/Teacher/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await TeacherService.updateTeacher(request.body, id);
            response.status(201).send(ok('updated Teacher', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Teacher', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Teacher/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            const result = await TeacherService.getById(id);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Teacher', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Teacher", async (request, response) => {
        try {
            const conditions = request.body;
            const result = await TeacherService.getAllWithConditions(conditions);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Teacher', 400, undefined, e.meta.cause))
        }
    })


    return app;
}