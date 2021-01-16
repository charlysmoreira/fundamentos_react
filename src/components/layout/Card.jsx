import "./Card.css"
import React from 'react'

export default (props) => {
    const styleCard = {
        backgroundColor : props.color || '#FF0',
        borderColor : props.color || '#FF0'
    }
    return (
        <div className="Card" style={styleCard}>
            <div className="Title">
                {props.title}
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}