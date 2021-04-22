import React from 'react'
import { 
    FacebookShareButton,
    FacebookIcon, 
    RedditShareButton, 
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>main st 1010, #4, San Jose, CA</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-5555">+1(408)601-8831</a>
                        </div>
                        <div className="d-flex">
                            <p>hsprime@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className='footer-nav'>Home</a><br/>
                                <a className='footer-nav'>About Me</a><br/>
                                <a className='footer-nav'>Services</a>
                            </div>
                            <div className="col">
                                <a className='footer-nav'>Experience</a><br/>
                                <a className='footer-nav'>Portfolio</a><br/>
                                <a className='footer-nav'>Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center mt-2">
                            <FacebookShareButton
                                url={'https://github.com/hsprime85'}
                                quote={"Full-Stack Developer"}
                                hashtag="#react"
                                >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <RedditShareButton
                                url={'https://github.com/hsprime85'}
                                quote={"Full-Stack Developer"}
                                hashtag="#react"
                                >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={'https://github.com/hsprime85'}
                                quote={"Full-Stack Developer"}
                                hashtag="#react"
                                >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Hanson | All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
