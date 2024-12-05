export function ok(operation, status, data=new Date()){
    return {
        operation,
        status,
        data
    }
}