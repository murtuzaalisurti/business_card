import { CardWrap, CardStyled, MainContentWrapperStyled, IntroductionWrapperStyled } from '../styled/StyledCard'
import { ImageWrapperStyled, ImageLayer } from '../styled/ImageStyled'
import { HeadingStyled } from '../styled/Headings'
import Introduction from './Introduction'
import About from './About'
import Email from './Email'
import location from '../assets/profile_final_2.png'
import { Button } from '../styled/UserInputSection'
import Tilt from 'react-tilt'

const Card = (props) => {
    var src = {
        img_src: props.image_src
    };
    if (document.querySelector("#image") == null || document.querySelector("#image").files.length === 0) {
        src.img_src = location
    }

    return (
        <>
            <CardWrap id="cardwrap">
                <HeadingStyled>Preview</HeadingStyled>
                <Tilt className="Tilt" options={{ max: 20, scale: 1.01, perspective: 1100, speed: 500, reverse: false, transition: true }}>
                    <CardStyled className="card" id="card" colors={props.colors}>
                        <ImageWrapperStyled>
                            <ImageLayer image_src={src.img_src} />
                        </ImageWrapperStyled>
                        <MainContentWrapperStyled>
                            <IntroductionWrapperStyled>
                                <Introduction name={props.name} occupation={props.occupation} website={props.website} colors={props.colors} />
                                <About about={props.about} services={props.services} colors={props.colors} />
                                <Email email={props.email} colors={props.colors} />
                            </IntroductionWrapperStyled>
                        </MainContentWrapperStyled>
                    </CardStyled>
                </Tilt>
                <Button className="for-mobile" onClick={() => { props.download_fun() }}>Download<i className="fas fa-download"></i></Button>
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
