import './Card.css'

import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Result(props){
    const {result} = props
    console.log(props.result);
    return(
        <Card title='Resultado' purple>
            <div className='result'>
                <span>                
                    <strong>{result}</strong>                    
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        result: state.numeros.result
    }
}

export default connect(mapStateToProps)(Result)