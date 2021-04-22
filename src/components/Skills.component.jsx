import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode, faServer, faUserFriends } from'@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className="py-5">
                <h1 className="py-5">Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faServer} size='2x' />
                                </div>
                                <h4>Backend Development</h4>
                                <p>I am trained in the MySQL, MongoDB, and Javascript stack. I have also explored Firebase development.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faFileCode} size='2x' />
                                </div>
                                <h4>Frontend Development</h4>
                                <p>Specialized in front-end development. I have worked frameworks with React, Django, and Spring.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faUserFriends} size='2x' />
                                </div>
                                <h4>Soft Skills</h4>
                                <p>I love to communicate with members and clients, a team-player, problem solver and eager to learn new technologies. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
                                </div>
                                <h4>Hard Skills</h4>
                                <p>Experienced with mulitiple programming languages, have portfolios with variety projects, understanding of current industry trends.</p>
                            </div>
                        </div>
                    </div>    
                </div>   
            </div>
        </div>
    )
}

export default Skills
