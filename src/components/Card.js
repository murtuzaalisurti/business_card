import React from 'react'
import {CardWrap, CardStyled, MainContentWrapperStyled, IntroductionWrapperStyled} from '../styled/StyledCard'
import { ImageWrapperStyled } from '../styled/ImageStyled'
import Image from './Image'
import Introduction from './Introduction'
import ContactCta from './ContactCta'
import About from './About'
import Socials from './Socials'
import location from '../assets/profile_final_2.png'

const Card = () => {
    return (
        <>
            <CardWrap>
                <CardStyled>
                    <ImageWrapperStyled>
                        <Image src={location} />
                    </ImageWrapperStyled>
                    <MainContentWrapperStyled>
                        <IntroductionWrapperStyled>
                            <Introduction />
                            <ContactCta />
                            <About />
                            <Socials />
                        </IntroductionWrapperStyled>
                    </MainContentWrapperStyled>
                </CardStyled>
            </CardWrap>
        </>
    )
}

export default Card
