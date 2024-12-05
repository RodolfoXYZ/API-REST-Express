import { uniqueInstance } from "../repositories/prismaInstance.js";


export async function createSubject(content){
           const result = await uniqueInstance.subject.create({
                data: {
                    description: content.description,
                    name: content.name,
                    creditHours: content.creditHours,
                    courseId: content.courseId
                }
            });
            console.log(result)
} 
export async function deletesubject(id){
    const result = await uniqueInstance.subject.delete({
        where: {
            id: id,
        }
    });
} 
export async function updatesubject(subjectData, id){
    const result = await uniqueInstance.subject.update({
        data: subjectData,
        where: {
            id: id,
        }
    });
} 
export async function getById(id){
    const result = await uniqueInstance.subject.findUnique({
        where:{
            id: id,
        }
    });
    return result;
} 
export async function getAllWithConditions(conditions){
    const result = await uniqueInstance.subject.findMany({
        where: conditions
    });
    return result;
} 

