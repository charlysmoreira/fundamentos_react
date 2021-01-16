import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={props.setEnc}> + </button>
            <button onClick={props.setDenc}> - </button>
        </div>
    )
}