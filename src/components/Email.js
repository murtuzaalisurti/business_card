import React from 'react'
import {EmailStyled} from '../styled/StyledCard'

const Email = (props) => {
    return (
        <EmailStyled>
            {props.email}
        </EmailStyled>
    )
}

export default Email
