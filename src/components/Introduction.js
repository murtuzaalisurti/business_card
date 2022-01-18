import React from 'react'
import {IntroductionStyled} from '../styled/StyledCard'

const Introduction = (props) => {
    return (
        <IntroductionStyled theme={props.theme}>
          <p className="name">{props.name}</p>
          <p className="occupation">{props.occupation}</p>
          <p className="website">{props.website}</p>  
        </IntroductionStyled>
    )
}

export default Introduction
