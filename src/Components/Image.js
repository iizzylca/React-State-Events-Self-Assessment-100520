import React from 'react'

function Image(props){


    return (
        <img onClick={props.handleClick} alt="drake-pic" src={props.image}/>
        )
}

export default Image
