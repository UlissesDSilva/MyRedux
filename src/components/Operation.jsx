import './Card.css'

import React from 'react'
import { connect } from 'react-redux'
import { alterMin, alterMax } from '../store/actions/numberAction'
import { operationSoma, operationMedia, operationSorteio } from '../store/actions/operationAction'
import Card from './Card'

function Operation(props){
    const {min, max} = props
    let soma = min + max
    let media = (min + max) / 2
    const sorteio = () => parseInt(Math.random() * (max - min + 1) - min)
    return(
        <Card title='Operações' blue>
            <div className='operation'>
                <span>
                    <strong>MIN:</strong>
                    <input type="number" value={min} onChange={evt => props.alterMinNumber(+evt.target.value)}/>
                </span>
                <span>
                    <strong>MAX:</strong>
                    <input type="number" value={max} onChange={evt => props.alterMaxNumber(+evt.target.value)}/>
                </span>
            </div>
            <div>
                <button className='btn'
                    onClick={() => props.resultSoma(soma)}
                >
                    Soma
                </button>
                <button className='btn'
                    onClick={() => props.resultMedia(media)}
                >
                    Média
                </button>
                <button className='btn'
                    onClick={() => props.resultSorteio(sorteio())}
                >
                    Sorteio
                </button>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch){
    return{
        alterMinNumber(number){
            const action = alterMin(number)
            dispatch(action)
        },
        alterMaxNumber(number){
            const action = alterMax(number)
            dispatch(action)
        },
        resultSoma(number){
            const action = operationSoma(number)
            dispatch(action)
        },
        resultMedia(number){
            const action = operationMedia(number)
            dispatch(action)
        },
        resultSorteio(number){
            const action = operationSorteio(number)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operation)