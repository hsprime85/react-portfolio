import React from 'react'
import TestimonialsCarousel from './TestimonialsCarousel.component'

const Testimomnial = () => {
    return (
        <div id='testimomnials'className='testimonials'>
            <h1>My happy clients</h1>
            <div className="container">
                <div className="testimonial-content">
                    <TestimonialsCarousel />
                </div>
            </div>
        </div>
    )
}

export default Testimomnial
