import React from 'react'
import hanson from '../hyunsoo1.jpeg'

const AboutMe = () => {
    return (
        <div id='about' className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="image-wrap mb-5">
                        <img className='about-me-image' src={hanson} alt="hanson"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-me-title">About me</h1>
                    <p>Hello! I am Hyunsoo Jeon a.k.a Hanson - a Software Engineer.<br/>
                    I am a multi-talented human fueled by high energy levels and deep concentration.<br/>

                    </p>
                </div>
            </div>            
        </div>
    )
}

export default AboutMe
