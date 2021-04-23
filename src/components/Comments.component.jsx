import React from 'react'
import CommentsCarousel from './CommentsCarousel.component'

const Comments = () => {
    return (
        <div id='comments'className='comments'>
            <h1>Comments</h1>
            <div className="container">
                <div className="comments-content">
                    <CommentsCarousel />
                </div>
            </div>
        </div>
    )
}

export default Comments
