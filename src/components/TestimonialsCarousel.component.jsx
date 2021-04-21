import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import avatar1 from '../portfolio-images/avatars/avatar-1.png'
import avatar2 from '../portfolio-images/avatars/avatar-2.png'
import avatar3 from '../portfolio-images/avatars/avatar-3.png'
import avatar4 from '../portfolio-images/avatars/avatar-4.png'

const TestimonialsCarousel = () => {
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
                <img src={avatar1} alt="mike 1"/>
                <div className="myCrousel">
                    <h3>Mike 1</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt est veniam nostrum voluptatem sed neque nesciunt eum molestiae impedit accusamus soluta odit sunt cupiditate, id voluptatum laudantium minima cum ad!</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="stark 2"/>
                <div className="myCrousel">
                    <h3>Stark 2</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt est veniam nostrum voluptatem sed neque nesciunt eum molestiae impedit accusamus soluta odit sunt cupiditate, id voluptatum laudantium minima cum ad!</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="bruce 3"/>
                <div className="myCrousel">
                    <h3>Bruce 3</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt est veniam nostrum voluptatem sed neque nesciunt eum molestiae impedit accusamus soluta odit sunt cupiditate, id voluptatum laudantium minima cum ad!</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="peter 4"/>
                <div className="myCrousel">
                    <h3>Peter 4</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt est veniam nostrum voluptatem sed neque nesciunt eum molestiae impedit accusamus soluta odit sunt cupiditate, id voluptatum laudantium minima cum ad!</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
