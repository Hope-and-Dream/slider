import React from 'react';
import leftIcon from '../assets/left.png';
import rightIcon from '../assets/right.png';

export const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow`}
            onClick={onClick}
        >
            <img src={leftIcon} alt="left"/>
        </div>
    );
};

export const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow`}
            onClick={onClick}
        >
            <img src={rightIcon} alt="right"/>
        </div>
    );
};



