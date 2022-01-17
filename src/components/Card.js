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
                <CardStyled className="card" id="card" P_col={props.P_col}>
                    <ImageWrapperStyled>
                        <ImageLayer image_src={src.img_src} />
                    </ImageWrapperStyled>
                    <MainContentWrapperStyled>
                        <IntroductionWrapperStyled>
                            <Introduction name={props.name} occupation={props.occupation} website={props.website} />
                            <About about={props.about} services={props.services} />
                            <Email email={props.email} S_col={props.S_col} />
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
    P_col: "#1A1B21",
    S_col: "#161619",
    image_src: location
}

export default Card
