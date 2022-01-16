import React from 'react'
import {AboutWrapper} from '../styled/StyledCard'

const About = () => {
    return (
        <AboutWrapper>
            <div className="about">
                <div className="title">About</div>
                <div className="desc">Hey, myself Murtuza and I am a front-end web developer & a blogger. I am specialized in JavaScript and React.js</div>
            </div>
            <div className="interests">
                <div className="title">Interests</div>
                <div className="desc">Some of my interests include blogging, web development, reading and googling stuff a lot!</div>
            </div>
        </AboutWrapper>
    )
}

export default About
