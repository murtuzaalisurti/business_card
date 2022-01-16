import React from 'react'
import {ContactCTAWrapperStyled} from '../styled/StyledCard'

const ContactCta = (props) => {
    return (
        <ContactCTAWrapperStyled>
            <a href={`mailto:${props.email}`}><button className="email"><i className="fas fa-envelope"></i>&nbsp;&nbsp;Email</button></a>
            <a href={props.linkedin}><button className="linkedin"><i className="fab fa-linkedin"></i>&nbsp;&nbsp;LinkedIn</button></a>
        </ContactCTAWrapperStyled>
    )
}

export default ContactCta
