import { uniqueInstance } from "../repositories/prismaInstance.js";


export async function createClass(content){
           const result = await uniqueInstance.class.create({
                data: {
                   period: content.period,
                   year: content.year,
                   courseId: content.courseId,
                   teacherId: content.teacherId
                }
            });
            console.log(result)
} 
export async function deleteClass(id){
    const result = await uniqueInstance.class.delete({
        where: {
            id: id,
        }
    });
} 
export async function updateClass(ClassData, id){
    const result = await uniqueInstance.class.update({
        data: ClassData,
        where: {
            id: id,
        }
    });
} 
export async function getById(id){
    const result = await uniqueInstance.class.findUnique({
        where:{
            id: id,
        }
    });
    return result;
} 
export async function getAllWithConditions(conditions, cascadeOn){
    const result = await uniqueInstance.class.findMany({
        include: {
            teacher: cascadeOn,
            course: cascadeOn,
            enrollments: cascadeOn
        }
    });
    return result;
} 

