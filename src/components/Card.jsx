import './Card.css'

import React from 'react'

function getColor(props){
    if(props.blue) return "blue"
    if(props.purple) return "purple"
    return ""
}

function Card(props){
    return(
        <div className={`Card ${getColor(props)}`}>
            <div className="header">
                <span className="title">{props.title}</span>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Card