export function wrong(operation, error, data=new Date(), log){
    return {
        operation,
        error,
        log: log
    }
}