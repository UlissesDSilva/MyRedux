export function operationSoma(number){
    return{
        type: 'SOMA',
        payload: number
    }
}

export function operationMedia(number){
    return{
        type: 'MEDIA',
        payload: number
    }
}

export function operationSorteio(number){
    return{
        type: 'SORTEIO',
        payload: number
    }
}