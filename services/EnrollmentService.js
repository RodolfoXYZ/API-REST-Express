import { uniqueInstance } from "../repositories/prismaInstance.js";


export async function createEnrollment(content){
           const result = await uniqueInstance.enrollment.create({
                data: {
                   enrollmentDate: new Date().toISOString(),
                   status: "pending",
                   classId: content.classId,
                   studentId: content.studentId 
                }
            });
            console.log(result)
} 
export async function updateEnrollment(EnrocreateEnrollmentData, id){
    const result = await uniqueInstance.enrollment.update({
        data: EnrocreateEnrollmentData,
        where: {
            id: id,
        }
    });
} 
export async function getById(id){
    const result = await uniqueInstance.enrollment.findUnique({
        where:{
            id: id,
        }
    });
    return result;
} 
export async function getAllWithConditions(conditions){
    const result = await uniqueInstance.enrollment.findMany({
        where: conditions
    });
    return result;
} 

