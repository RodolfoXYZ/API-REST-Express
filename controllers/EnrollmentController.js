import express from "express";
import * as EnrollmentService from "../services/EnrollmentService.js";
import { ok } from "../dtos/ok.js";
import { wrong } from "../dtos/wrong.js";

export function EnrollmentController(app = express()) {
    app.post("/Enrollment", async (request, response) => {
        try {
            await EnrollmentService.createEnrollment(request.body);
            response.status(201).send(ok('Create Enrollment', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('Create Enrollment', 400))
        }
    })
    app.put("/Enrollment/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            await EnrollmentService.updateEnrollment(request.body, id);
            response.status(201).send(ok('updated Enrollment', 201))
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Enrollment', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Enrollment/:id", async (request, response) => {
        try {
            const id = +request.params.id;
            const result = await EnrollmentService.getById(id);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Enrollment', 400, undefined, e.meta.cause))
        }
    })
    app.get("/Enrollment/", async (request, response) => {
        try {
            const conditions = request.body;
            const result = await EnrollmentService.getAllWithConditions(conditions);
            response.status(200).send(result)
        }
        catch (e) {
            console.log(e)
            response.status(400).json(wrong('updated Enrollment', 400, undefined, e.meta.cause))
        }
    })


    return app;
}