import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from'@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from'@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className='services'>
            <div className="py-5">
                <h1 className="py-5">My services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
                                </div>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, perferendis? Aspernatur cum eaque optio rem eveniet repellendus beatae molestiae quo quisquam quae, molestias provident ratione architecto earum facere sequi placeat.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faFileCode} size='2x' />
                                </div>
                                <h3>Web Developement</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, perferendis? Aspernatur cum eaque optio rem eveniet repellendus beatae molestiae quo quisquam quae, molestias provident ratione architecto earum facere sequi placeat.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faFacebookF} size='2x' />
                                </div>
                                <h3>Full stack developement</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, perferendis? Aspernatur cum eaque optio rem eveniet repellendus beatae molestiae quo quisquam quae, molestias provident ratione architecto earum facere sequi placeat.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faGoogle} size='2x' />
                                </div>
                                <h3>Front-end Development</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, perferendis? Aspernatur cum eaque optio rem eveniet repellendus beatae molestiae quo quisquam quae, molestias provident ratione architecto earum facere sequi placeat.</p>
                            </div>
                        </div>
                    </div>    
                </div>   
            </div>
        </div>
    )
}

export default Services
