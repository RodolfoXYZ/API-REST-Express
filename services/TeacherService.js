import { uniqueInstance } from "../repositories/prismaInstance.js";


export async function createTeacher(content){
           const result = await uniqueInstance.teacher.create({
                data: {
                    email: content.email,
                    name: content.name,
                    phone: content.phone,
                    specialty: content.specialty
                }
            });
            console.log(result)
} 
export async function deleteTeacher(id){
    const result = await uniqueInstance.teacher.delete({
        where: {
            id: id,
        }
    });
} 
export async function updateTeacher(TeacherData, id){
    const result = await uniqueInstance.teacher.update({
        data: TeacherData,
        where: {
            id: id,
        }
    });
} 
export async function getById(id){
    const result = await uniqueInstance.teacher.findUnique({
        where:{
            id: id,
        }
    });
    return result;
} 
export async function getAllWithConditions(conditions){
    const result = await uniqueInstance.teacher.findMany({
        where: conditions
    });
    return result;
} 

