import Initial from '../initial'
const initial = Initial

export default function numberReducer(state = initial, action){
    switch(action.type){
        case 'MIN':
            return{ ...state, min: action.payload }
        case 'MAX':
            return{ ...state, max: action.payload }
        case 'SOMA':
            return{ ...state, result: action.payload }
        case 'MEDIA':
            return{ ...state, result: action.payload }
        case 'SORTEIO':
            return{ ...state, result: action.payload }
        default:
            return state
    }
}