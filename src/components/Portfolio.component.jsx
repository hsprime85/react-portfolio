import React from 'react'
import allInOne from '../portfolio-images/all-in-one-e-commerce.png'
import limitedshoe from '../portfolio-images/limitedshoe.png'
import nasaApi from '../portfolio-images/nasaapi.gif'
import musicPlayer from '../portfolio-images/musicplayer.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from'@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio= () => {
    const openPopupboxAllinOne = () => {
        const content =(
            <>
                <img className='portfolio-image-popupbox' src={allInOne} alt="All in One e-commerce project"/>
                <p> All in One E-commerce project <br/>
                 A React fashion E-Commerce with mobile friendly application<br/>
                    Easy to check the items to purchase in check out box, which is pop up and close once click the shoppin bag icon. <br/>It connect to firebase with Google authentication to login with Google id.<br/>
                    Easy to access check out page and payment with Stripe development.</p>
                <b>Demo:</b> <a className='hyper-link' onClick={()=> window.open('https://all-in-one-live.herokuapp.com/', '_blank')}>https://all-in-one-live.herokuapp.com/</a><br/>               
                <b>GitHub:</b> <a className='hyper-link' onClick={()=> window.open('https://github.com/hsprime85/shopsReactProject')}>https://github.com/hsprime85/shopsReactProject</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigAllinOne = {
        titleBar: {
            enable:false,
            text: "All In One E-commerce Project."
        },
        fadeIn: true,
        fadeInSpeed: 600
    }

    const openPopupboxLimitedshoe = () => {
        const content =(
            <>
                <img className='portfolio-image-popupbox' src={limitedshoe} alt="Limited Shoes e-commerce project"/>
                <p> Limited Shoes E-commerce project <br/>
                    A React fully functioning full-stack E-Commerce with mobile friendly application<br/>
                    It has client side page to puchase and process payment with PayPal.<br/>
                    In the admin page, It could handle users, products, and payment methods.
                    <br/>Each of product has reviews, qty process with easy to process buttons.<br/> 
                    in the backend, established with MongoDb, using MongoDB atlas to handle user, cart items, and products. </p>
                <b>Demo:</b> <a href='#' className='hyper-link' onClick={()=> window.open('https://limitshoeapp.herokuapp.com/', '_blank')}>https://limitshoeapp.herokuapp.com/</a><br/>       
                <b>GitHub:</b> <a href='#' className='hyper-link' onClick={()=> window.open('https://https://github.com/hsprime85/reactEcommerceProject')}>https://github.com/hsprime85/reactEcommerceProject</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigLimitedshoe = {
        titleBar: {
            enable:false,
            text: "Limited Shoes e-commerce project."
        },
        fadeIn: true,
        fadeInSpeed: 600
    }


    const openPopupboxNasaApi = () => {
        const content =(
            <>
                <img className='portfolio-image-popupbox' src={nasaApi} alt="Nasa Api app project"/>
                <p>NASA API applicatiopn<br/>
                Calling data from NASA API. It calls data randomly with image, article of title, author, date, and article. <br/>
                Each of content has 'Add to Favorite' button with 'ADDED' sign to save in favorite page.<br/>
                Add to Favorite' page, it edit each of articles with 'Remove Favorite'.<br/></p>
                <b>Demo:</b> <a href='#' className='hyper-link' onClick={()=> window.open('https://hsprime85.github.io/JS_NasaAPI_project/', '_blank')}>https://hsprime85.github.io/JS_NasaAPI_project/</a><br/>       
                <b>GitHub:</b> <a href='#' className='hyper-link' onClick={()=> window.open('https://github.com/hsprime85/JS_NasaAPI_project')}>https://github.com/hsprime85/JS_NasaAPI_project</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigNasaApi = {
        titleBar: {
            enable:false,
            text: "Nasa API application project."
        },
        fadeIn: true,
        fadeInSpeed: 600
    }


    const openPopupboxMusicPlayer = () => {
        const content =(
            <>
                <img className='portfolio-image-popupbox' src={musicPlayer} alt="Music Player app project"/>
                <p> Music player application<br/>
                It shows song image, title, artist. It shows song time with drag and play progress bar.<br/>
                Functioning 3 buttons with previous-song, play, pause and next-song. </p>
                <b>Demo:</b> <a href='#' className='hyper-link' onClick={()=> window.open('https://hsprime85.github.io/JS_musicPlayer_project/', '_blank')}>https://hsprime85.github.io/JS_musicPlayer_project/</a><br/>       
                <b>GitHub:</b> <a href='#' className='hyper-link' onClick={()=> window.open('https://github.com/hsprime85/JS_musicPlayer_project')}>https://github.com/hsprime85/JS_musicPlayer_project</a>
            </>
        )
        PopupboxManager.open({content})
    }
    const popupboxConfigMusicPlayer = {
        titleBar: {
            enable:false,
            text: "Music player application project."
        },
        fadeIn: true,
        fadeInSpeed: 600
    }


    return (
        <div id='portfolio' className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolios</h1>
                
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxAllinOne}>
                        <img className='portfolio-image' src={allInOne} alt="All in one e-commerce"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxLimitedshoe}>
                        <img className='portfolio-image' src={limitedshoe} alt="limited shoe e-commerce"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxNasaApi}>
                        <img className='portfolio-image' src={nasaApi} alt="nasa api app"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxMusicPlayer}>
                        <img className='portfolio-image' src={musicPlayer} alt="music player"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigAllinOne} />
            <PopupboxContainer {...popupboxConfigLimitedshoe} />
            <PopupboxContainer {...popupboxConfigNasaApi} />
            <PopupboxContainer {...popupboxConfigMusicPlayer} />
        </div>
    )
}

export default Portfolio
