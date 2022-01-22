import React from 'react';
import {StyledFooter} from '../styled/FooterStyled'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="text1" aria-label="contributor">Made with&nbsp;<i
                className="fas fa-heart"></i>&nbsp;by&nbsp;<a rel="noreferrer" aria-label="github profile"
                    href="https://github.com/murtuzaalisurti">Murtuza</a></div>
        </StyledFooter>
    );
};

export default Footer;
