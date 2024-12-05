import { uniqueInstance } from "../repositories/prismaInstance.js";


export async function createStudent(content){
           const result = await uniqueInstance.student.create({
                data: {
                    dateOfBirth: content.dateOfBirth,
                    email: content.email,
                    name: content.name,
                    phone: content.phone,
                    registration: content.registration
                }
            });
            console.log(result)
} 
export async function deleteStudent(id){
    const result = await uniqueInstance.student.delete({
        where: {
            id: id,
        }
    });
} 
export async function updateStudent(studentData, id){
    const result = await uniqueInstance.student.update({
        data: studentData,
        where: {
            id: id,
        }
    });
} 
export async function getById(id){
    const result = await uniqueInstance.student.findUnique({
        where:{
            id: id,
        }
    });
    return result;
} 
export async function getAllWithConditions(conditions){
    const result = await uniqueInstance.student.findMany({
        where: conditions
    });
    return result;
} 

