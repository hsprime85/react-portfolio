import React from 'react'

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block time-line-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2020</h3>
                        <p>3D Access Industries, CNC Engineer. <br/>
                        Computer-numeric controlled in dimensions, tolerances, angles of workpieces and
                        machines according to exact specifications and metal properties for classified
                        projects.<br/>
                        Ensured 70% efficiency of logistics processing for individual engineers by
                        reinforcing team’s project understanding, accelerated processes and monitoring deadlines.
                        </p>
                    </div>
                </div>
            
                
                <div className="timeline-block time-line-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020</h3>
                        <p>Coding Dojo Bootcamp: Full-stack software engineering course.<br/>
                        I am trained with 3 stacks of framework, as Python(Django), Javascript(React), and JAVA(Spring).<br/>
                        Also, I have MySQL, MongoDB development for backend.
                        </p>
                    </div>
                </div>

                <div className="timeline-block time-line-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021</h3>
                        <p>Freelancer Software Developer.<br/>
                        </p>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default Experience
