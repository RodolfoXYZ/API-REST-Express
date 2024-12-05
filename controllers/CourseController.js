import express from "express";
import * as CourseService from "../services/CourseService.js";
import { ok } from "../dtos/ok.js";
import { wrong } from "../dtos/wrong.js";

export function CourseController(app = express()) {
    app.post("/Course", async (request, response) => {
        try {
            await CourseService.createCourse(request.body);
            response.status(201).send(ok('Create Course', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Create Course', 400))
        }
    })
    app.delete("/Course/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await CourseService.deleteCourse(id);
            response.status(201).send(ok('Delete Course', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Delete Course', 400, undefined, e.meta.cause))
        }
    })
    app.put("/Course/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await CourseService.updateCourse(request.body, id);
            response.status(201).send(ok('updated Course', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Course', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Course/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            const result = await CourseService.getById(id);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Course', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Course", async (request, response) => {
        try {
            const conditions = request.body;
            const result = await CourseService.getAllWithConditions(conditions);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Course', 400, undefined, e.meta.cause))
        }
    })


    return app;
}