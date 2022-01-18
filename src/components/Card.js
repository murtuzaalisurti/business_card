import {CardWrap, CardStyled, MainContentWrapperStyled, IntroductionWrapperStyled} from '../styled/StyledCard'
import { ImageWrapperStyled, ImageLayer } from '../styled/ImageStyled'
import {HeadingStyled} from '../styled/Headings'
import Introduction from './Introduction'
import About from './About'
import Email from './Email'
import location from '../assets/profile_final_2.png'

const Card = (props) => {
    var src = {
        img_src: props.image_src
    };
    if(document.querySelector("#image") == null || document.querySelector("#image").files.length === 0) {
        src.img_src = location
    }

    return (
        <>
            <CardWrap id="cardwrap">
                <HeadingStyled>Preview</HeadingStyled>
                <CardStyled className="card" id="card" theme={props.theme}>
                    <ImageWrapperStyled>
                        <ImageLayer image_src={src.img_src} />
                    </ImageWrapperStyled>
                    <MainContentWrapperStyled>
                        <IntroductionWrapperStyled>
                            <Introduction name={props.name} occupation={props.occupation} website={props.website} theme={props.theme} />
                            <About about={props.about} services={props.services} theme={props.theme} />
                            <Email email={props.email} theme={props.theme} />
                        </IntroductionWrapperStyled>
                    </MainContentWrapperStyled>
                </CardStyled>
            </CardWrap>
        </>
    )
}

Card.defaultProps = {
    name: "Murtuzaali Surti",
    email: "hey.murtuza@gmail.com",
    occupation: "Front-end Web Developer",
    website: "murtuzaalisurti.github.io",
    linkedin: "https://www.linkedin.com/in/murtuzaali-surti/",
    about: "Hey, myself Murtuza and I am a Front-end Web Developer & a Blogger. I am specialized in JavaScript as well as Responsive Web Design. Content Creation suits me well.",
    services: "I offer front-end web development, technical writing, blogging or full stack web development as a service.",
    github: "http://github.com/murtuzaalisurti",
    twitter: "http://twitter.com/murtuza_surti",
    instagram: "http://instagram.com/murtuzaali_surti",
    image_src: location
}

export default Card
