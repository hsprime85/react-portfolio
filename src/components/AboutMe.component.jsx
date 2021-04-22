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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil sed omnis obcaecati sequi, ut laudantium neque dolorum dignissimos veniam nisi similique quas sint aliquam porro voluptate eum veritatis placeat?
                    </p>
                </div>
            </div>            
        </div>
    )
}

export default AboutMe
