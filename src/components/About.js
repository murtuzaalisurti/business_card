import React from 'react'
import {AboutWrapper} from '../styled/StyledCard'

const About = (props) => {
    return (
        <AboutWrapper colors={props.colors}>
            <div className="about">
                <div className="title">About</div>
                <div className="desc">{props.about}</div>
            </div>
            <div className="interests">
                <div className="title">Services</div>
                <div className="desc">{props.services}</div>
            </div>
        </AboutWrapper>
    )
}

export default About
