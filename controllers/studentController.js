import express from "express";
import * as StudentService from "../services/StudentService.js";
import { ok } from "../dtos/ok.js";
import { wrong } from "../dtos/wrong.js";

export function StudentController(app = express()){
    app.post("/student", async (request, response)=>{
        try{
            await StudentService.createStudent(request.body);
            response.status(201).send(ok('Create User', 201))
        }
        catch(e){
            console.log(e)
            response.status(400).json(wrong('Create User', 400))
        }
    })
    app.delete("/student/:id", async (request, response)=>{
        try{
            const id = +request.params.id;
            await StudentService.deleteStudent(id);
            response.status(201).send(ok('Delete User', 201))
        }
        catch(e){
            console.log(e)
            response.status(400).json(wrong('Delete User', 400, undefined, e.meta.cause))
        }
    })
    app.put("/student/:id", async (request, response)=>{
        try{
            const id = +request.params.id;
            await StudentService.updateStudent(request.body,id);
            response.status(201).send(ok('updated User', 201))
        }
        catch(e){
            console.log(e)
            response.status(400).json(wrong('updated User', 400, undefined, e.meta.cause))
        }
    })
    app.get("/student/:id", async (request, response)=>{
        try{
            const id = +request.params.id;
            const result = await StudentService.getById(id);
            response.status(200).send(result)
        }
        catch(e){
            console.log(e)
            response.status(400).json(wrong('updated User', 400, undefined, e.meta.cause))
        }
    })
    app.get("/student", async (request, response)=>{
        try{
            const conditions = request.body;
            const result = await StudentService.getAllWithConditions(conditions);
            response.status(200).send(result)
        }
        catch(e){
            console.log(e)
            response.status(400).json(wrong('updated User', 400, undefined, e.meta.cause))
        }
    })
    
    
    return app;
}