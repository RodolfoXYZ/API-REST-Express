import { uniqueInstance } from "../repositories/prismaInstance.js";


export async function createCourse(content){
           const result = await uniqueInstance.course.create({
                data: {
                   description: content.description,
                   duration: content.duration,
                   level: content.level,
                   name: content.name
                }
            });
            console.log(result)
} 
export async function deleteCourse(id){
    const result = await uniqueInstance.course.delete({
        where: {
            id: id,
        }
    });
} 
export async function updateCourse(CourseData, id){
    const result = await uniqueInstance.course.update({
        data: CourseData,
        where: {
            id: id,
        }
    });
} 
export async function getById(id){
    const result = await uniqueInstance.course.findUnique({
        where:{
            id: id,
        }
    });
    return result;
} 
export async function getAllWithConditions(conditions){
    const result = await uniqueInstance.course.findMany({
        where: conditions
    });
    return result;
} 

