import React from 'react';
import {StyledFooter} from '../styled/FooterStyled'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="text1" aria-label="contributor">Made with&nbsp;<i
                className="fas fa-heart"></i>&nbsp;by&nbsp;<a rel="noreferrer" aria-label="github profile"
                    href="https://github.com/murtuzaalisurti">Murtuza</a></div>
            <a className="product-hunt-link" href="https://www.producthunt.com/posts/contact-card-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-contact-card-generator" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=328445&theme=dark" alt="Contact Card Generator - Generate as well as download business cards on the go! | Product Hunt" style={{}} /></a>
        </StyledFooter>
    );
};

export default Footer;
