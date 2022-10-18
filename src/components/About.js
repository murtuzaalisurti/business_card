import React from 'react'
import {AboutWrapper} from '../styled/StyledCard'

const About = (props) => {
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
