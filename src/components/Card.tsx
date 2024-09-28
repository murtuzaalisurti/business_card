import { CardWrap, CardStyled, MainContentWrapperStyled, IntroductionWrapperStyled } from '../styled/StyledCard'
import { ImageWrapperStyled, ImageLayer } from '../styled/ImageStyled'
import { HeadingStyled } from '../styled/Headings'
import Introduction from './Introduction'
import About from './About'
import Email from './Email'
import location from '../assets/profile.png'
import { Button } from '../styled/UserInputSection'
import { Tilt } from 'react-tilt'

interface Props {
    name: string,
    occupation: string,
    website: string,
    email: string,
    linkedin: string,
    about: string,
    services: string,
    github: string,
    twitter: string,
    instagram: string,
    colors: {
        cardBackgroundColor: string,
        nameColor: string,
        occupationColor: string,
        websiteColor: string,
        aboutInterestsTitleColor: string,
        descColor: string,
        emailColor: string,
        emailBackgroundColor: string
    },
    download_fun: () => void,
    image_src: string,
    download_state: boolean,
    breakpoint: number,
    downloadable: boolean
}

const Card = (props: Props) => {
    const src = {
        img_src: props.image_src
    };
    if (document.querySelector("#image") == null || (document.querySelector("#image") as HTMLInputElement).files?.length === 0) {
        src.img_src = location
    }

    // card JSX element
    const cardWithStylesJSX = (
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
    );

    return (
        <>
            <CardWrap id="cardwrap">
                <HeadingStyled>Preview</HeadingStyled>
                {props.breakpoint <= 43 ? cardWithStylesJSX : <Tilt className="Tilt" options={{ max: 20, scale: 1.01, perspective: 1100, speed: 500, reverse: false, transition: true }}>{cardWithStylesJSX}</Tilt>}
                <Button className="for-mobile download_btn" disabled={props.downloadable ? false : true} title={props.downloadable ? "" : "Please fill out all fields"} onClick={() => { props.download_fun() }}><div className="content">Download<i className={props.download_state ? "fas fa-circle-notch load" : "fas fa-download"}></i>{!props.downloadable && <div className="warn">Please fill out all the fields</div>}</div></Button>
            </CardWrap>
        </>
    )
}

Card.defaultProps = {
    name: "Murtuzaali Surti",
    email: "hey.murtuza@gmail.com",
    occupation: "Software Engineer",
    website: "murtuzaalisurti.github.io",
    linkedin: "https://www.linkedin.com/in/murtuzaali-surti/",
    about: "Hey, myself Murtuza and I work as a Software Engineer & a Content Creator. I am specialized in javascript as well as responsive web design. Content creation suits me well.",
    services: "I offer front-end web development, technical writing, blogging or full stack web development as a service.",
    github: "https://github.com/murtuzaalisurti",
    twitter: "https://twitter.com/murtuza_surti",
    instagram: "https://instagram.com/murtuzaali_surti",
    image_src: location
}

export default Card
