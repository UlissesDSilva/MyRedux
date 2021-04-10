export function alterMin(number){
    return{
        type: 'MIN',
        payload: number
    }
}

export function alterMax(number){
    return{
        type: 'MAX',
        payload: number
    }
}