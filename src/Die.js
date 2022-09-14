import React from 'react'

export default function Die(props) {
    return(
        <div className='dice-border'>
            <h2 className='dice-content'>{props.value}</h2>
        </div>
    )
}