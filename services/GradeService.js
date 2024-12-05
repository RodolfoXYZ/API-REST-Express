import { uniqueInstance } from "../repositories/prismaInstance.js";


export async function createGrade(content){
           const result = await uniqueInstance.grade.create({
                data: {
                   date: new Date().toISOString(),
                   finalScore: content.finalScore,
                   classId: content.classId,
                   studentId: content.studentId
                }
            });
            console.log(result)
} 
export async function deleteGrade(id){
    const result = await uniqueInstance.grade.delete({
        where: {
            id: id,
        }
    });
} 
export async function updateGrade(GradeData, id){
    const result = await uniqueInstance.grade.update({
        data: GradeData,
        where: {
            id: id,
        }
    });
} 
export async function getById(id){
    const result = await uniqueInstance.grade.findUnique({
        where:{
            id: id,
        }
    });
    return result;
} 
export async function getAllWithConditions(conditions, cascadeOn){
    const result = await uniqueInstance.grade.findMany({
        include: {
            class: cascadeOn,
            student: cascadeOn
        }
    });
    return result;
} 

