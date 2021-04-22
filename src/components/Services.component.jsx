import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from'@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from'@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="py-5">
                <h1 className="py-5">My services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
                                </div>
                                <h4>Web Design</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faFileCode} size='2x' />
                                </div>
                                <h4>Web Developement</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faFacebookF} size='2x' />
                                </div>
                                <h4>Full stack developement</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faGoogle} size='2x' />
                                </div>
                                <h4>Front-end Development</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>    
                </div>   
            </div>
        </div>
    )
}

export default Services
