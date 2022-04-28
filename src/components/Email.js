import React from 'react'
import {EmailStyled} from '../styled/StyledCard'

const Email = (props) => {
    return (
        <EmailStyled colors={props.colors}>
            {props.email}
        </EmailStyled>
    )
}

export default Email
