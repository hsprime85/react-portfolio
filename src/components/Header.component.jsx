import React from 'react'
import Typed from 'react-typed'
const Header = () => {
    return (
    <div id='home' className="header-wrapper">
        <div className="main-info">
            <h1>const Hyunsoo_Jeon = "Software Engineer";</h1>
            <Typed
                className='typed-text'
                strings={["Full-stact Development", "Front-end Development", "Web Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href="#contact" className='btn-main-offer'>Contact Me</a>
        </div>
    </div>
    )
}

export default Header
