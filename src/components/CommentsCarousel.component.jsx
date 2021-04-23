import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import avatar1 from '../portfolio-images/avatars/avatar-1.png'
import avatar2 from '../portfolio-images/avatars/avatar-2.png'
import avatar3 from '../portfolio-images/avatars/avatar-3.png'
import avatar4 from '../portfolio-images/avatars/avatar-4.png'

const CommentsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3500}
        >
            <>
                <img src={avatar1} alt="zechariah"/>
                <div className="myCrousel">
                    <h3>zechariah</h3>
                    <p>Hyunsoo has one of those attitudes that is alwyas positive. He frequently has a smile on his face and he enjoy his job.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="heyhee"/>
                <div className="myCrousel">
                    <h3>Heyhee</h3>
                    <p>He has a creative touch in a sometimes monotonous role within our team - the way he adds inspiration to the day to day tasks he performs is admirable.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="Sam"/>
                <div className="myCrousel">
                    <h3>Sam</h3>
                    <p>When a major problem arises, I frequently turn to Hyunsoo for his creativity in solving problems.<br/> The way he can look at an issue from different side is a great resource to the project.</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="david"/>
                <div className="myCrousel">
                    <h3>David</h3>
                    <p>Hyunsoo examines a problem and quickly identifies potential solutions, and then makes a recommendation as to what solution to pursue.<br/>
                    He understands the testing process and how to discover a solution to a particular problem.
                    </p>
                </div>
            </>
        </Carousel>
    )
}

export default CommentsCarousel
