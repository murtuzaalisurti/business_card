import React from 'react'
import {AboutWrapper} from '../styled/StyledCard'

const About = (props) => {
    return (
        <AboutWrapper>
            <div className="about">
                <div className="title">About</div>
                <div className="desc">{props.about}</div>
            </div>
            <div className="interests">
                <div className="title">Interests</div>
                <div className="desc">{props.interests}</div>
            </div>
        </AboutWrapper>
    )
}

export default About
