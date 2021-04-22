import React from 'react'
import allInOne from '../portfolio-images/all-in-one-e-commerce.png'
import limitedshoe from '../portfolio-images/limitedshoe.png'
import nasaApi from '../portfolio-images/nasaapi.gif'
import musicPlayer from '../portfolio-images/musicplayer.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from'@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio= () => {
    const openPopupboxAllinOne = () => {
        const content =(
            <>
                <img className='portfolio-image-popupbox' src={allInOne} alt="All in One e-commerce project"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil enim vero asperiores dolore nulla sunt excepturi veritatis tempora, necessitatibus eum placeat inventore, dolores laudantium nemo? Sint odio autem laborum dolorum!</p>
                <b>Demo:</b> <a className='hyper-link' onClick={()=> window.open('https://all-in-one-live.herokuapp.com/', '_blank')}>https://all-in-one-live.herokuapp.com/</a><br/>               
                <b>GitHub:</b> <a className='hyper-link' onClick={()=> window.open('https://github.com/hsprime85/shopsReactProject')}>https://github.com/hsprime85/shopsReactProject</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigAllinOne ={
        titleBar: {
            enable:true,
            text: "All In One E-commerce Project"
        },
        fadeIn: true,
        fadeInSpeed: 600
    }

    const openPopupboxLimitedshoe = () => {
        const content =(
            <>
                <img className='portfolio-image-popupbox' src={limitedshoe} alt="Limited Shoes e-commerce project"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil enim vero asperiores dolore nulla sunt excepturi veritatis tempora, necessitatibus eum placeat inventore, dolores laudantium nemo? Sint odio autem laborum dolorum!</p>
                <b>Demo:</b> <a className='hyper-link' onClick={()=> window.open('https://limitshoeapp.herokuapp.com/', '_blank')}>https://limitshoeapp.herokuapp.com/</a><br/>       
                <b>GitHub:</b> <a className='hyper-link' onClick={()=> window.open('https://https://github.com/hsprime85/reactEcommerceProject')}>https://github.com/hsprime85/reactEcommerceProject</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigLimitedshoe ={
        titleBar: {
            enable:true,
            text: "Limited Shoes E-commerce Project"
        },
        fadeIn: true,
        fadeInSpeed: 600
    }

    const openPopupboxNasaApi = () => {
        const content =(
            <>
                <img className='portfolio-image-popupbox' src={nasaApi} alt="Nasa Api app project"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil enim vero asperiores dolore nulla sunt excepturi veritatis tempora, necessitatibus eum placeat inventore, dolores laudantium nemo? Sint odio autem laborum dolorum!</p>
                <b>Demo:</b> <a className='hyper-link' onClick={()=> window.open('https://hsprime85.github.io/JS_NasaAPI_project/', '_blank')}>https://hsprime85.github.io/JS_NasaAPI_project/</a><br/>       
                <b>GitHub:</b> <a className='hyper-link' onClick={()=> window.open('https://github.com/hsprime85/JS_NasaAPI_project')}>https://github.com/hsprime85/JS_NasaAPI_project</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigNasaApi ={
        titleBar: {
            enable:true,
            text: "Nasa Api app project"
        },
        fadeIn: true,
        fadeInSpeed: 600
    }

    const openPopupboxMusicPlayer = () => {
        const content =(
            <>
                <img className='portfolio-image-popupbox' src={musicPlayer} alt="Music Player app project"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil enim vero asperiores dolore nulla sunt excepturi veritatis tempora, necessitatibus eum placeat inventore, dolores laudantium nemo? Sint odio autem laborum dolorum!</p>
                <b>Demo:</b> <a className='hyper-link' onClick={()=> window.open('https://hsprime85.github.io/JS_musicPlayer_project/', '_blank')}>https://hsprime85.github.io/JS_musicPlayer_project/</a><br/>       
                <b>GitHub:</b> <a className='hyper-link' onClick={()=> window.open('https://github.com/hsprime85/JS_musicPlayer_project')}>https://github.com/hsprime85/JS_musicPlayer_project</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigMusicPlayer ={
        titleBar: {
            enable:true,
            text: "Music Player app project"
        },
        fadeIn: true,
        fadeInSpeed: 600
    }

    return (
        <div id='portfolio' className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                
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
