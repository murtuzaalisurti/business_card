import { AboutWrapper } from '../styled/StyledCard'

interface Props {
    about: string
    services: string
    colors: Record<string, string>
}

const About = (props: Props) => {
    return (
        <AboutWrapper colors={props.colors}>
            <div className="about">
                <p className="title">About</p>
                <p className="desc">{props.about}</p>
            </div>
            <div className="interests">
                <p className="title">Services</p>
                <p className="desc">{props.services}</p>
            </div>
        </AboutWrapper>
    )
}

export default About
