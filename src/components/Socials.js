import React from 'react'
import {SocialsStyled} from '../styled/StyledCard'

const Socials = (props) => {
    return (
        <SocialsStyled>
            <a href={props.twitter}><i className="fab fa-twitter"></i></a>
            <a href={props.github}><i className="fab fa-github"></i></a>
            <a href={props.instagram}><i className="fab fa-instagram"></i></a>
        </SocialsStyled>
    )
}

export default Socials
