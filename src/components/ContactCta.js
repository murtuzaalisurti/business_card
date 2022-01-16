import React from 'react'
import {ContactCTAWrapperStyled} from '../styled/StyledCard'

const ContactCta = () => {
    return (
        <ContactCTAWrapperStyled>
            <a href="mailto:hey.murtuza@gmail.com"><button className="email"><i className="fas fa-envelope"></i>&nbsp;&nbsp;Email</button></a>
            <a href="https://linkedin.com/in/murtuzaali-surti"><button className="linkedin"><i className="fab fa-linkedin"></i>&nbsp;&nbsp;LinkedIn</button></a>
        </ContactCTAWrapperStyled>
    )
}

export default ContactCta
