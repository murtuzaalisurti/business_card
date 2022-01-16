import React from 'react'
import {StyledImage} from '../styled/ImageStyled'

const Image = (props) => {
    return (
        <StyledImage src={props.src}></StyledImage>  
    )
}

export default Image
