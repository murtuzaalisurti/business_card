import React from 'react'
import {EmailStyled} from '../styled/StyledCard'

const Email = (props) => {
    return (
        <EmailStyled theme={props.theme}>
            {props.email}
        </EmailStyled>
    )
}

export default Email
