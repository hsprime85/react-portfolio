import React from 'react'

const Contact = () => {
    return (
        <div className='contacts'>
            <div className="text-center">
                    <h1>Contact me</h1>
                    <p>Please fill out the form and decribe me </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input className='form-control' type='text' placeholder='Name' name='name'/>
                            <div className="line"></div>
                        </div>

                        <div className="text-center">
                            <input className='form-control' type='text' placeholder='Phone Number' phone='phone'/>
                            <div className="line"></div>
                        </div>

                        <div className="text-center">
                            <input className='form-control' type='email' placeholder='Email' email='email'/>
                            <div className="line"></div>
                        </div>
                        
                        <div className="text-center">
                            <input className='form-control' type='text' placeholder='Subject' subject='subject'/>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea className='form-control' type='text' placeholder='Description' subject='description'></textarea>
                            <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type='submit'>contact me</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
