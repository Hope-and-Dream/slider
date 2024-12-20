import React from 'react';
import '../App.scss'; 

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <div
                key={i}
                className={`star ${i < rating ? `filled` : ''}`}
            >

            </div>
        );
    }

    return <div className="stars">{stars}</div>;
};

export default StarRating;
