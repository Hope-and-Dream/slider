import { useEffect } from "react";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "./CustomArrows";
import StarRating from "./StarRating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.scss";
import React from "react";
import WebFont from 'webfontloader';
import topIcon from '../assets/top.png';
import guaranteeIcon from '../assets/guarantee.png';
import discountIcon from '../assets/discount.png';
import giftIcon from '../assets/gift.png';
import hitIcon from '../assets/hit.png';
import winterIcon from '../assets/winter.png';
import studdedIcon from '../assets/studded.png';
import mudIcon from '../assets/mud.png';

const SliderComponent = ({ tires }) => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        initialSlide: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        centerMode: false,
        autoplaySpeed: 2000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['IBM Plex Sans']
            }
        });
    }, []);

    return (
        <>
            <div className="tag" >
                <h1 className="font-loader">Хиты продаж</h1>
            </div>
            <div className="slider-container font-loader">
                <Slider {...settings}>
                    {tires.map((item) => (
                        <div className="card" key={item.id}>
                            <div className="whiteCard">
                                <div className="icons">
                                    <img src={topIcon} alt="top" />
                                    <img src={guaranteeIcon} alt="guarantee" />
                                    <img src={discountIcon} alt="discount" />
                                    <img src={giftIcon} alt="gift" />
                                    <img src={hitIcon} alt="hit" />
                                </div>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                />
                            </div>
                            <div className="grayCard">
                                <div className="mainInfo">
                                    <h2 className="title" >{item.name}</h2>
                                    <div>
                                        {/* <div className="stars">
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                            <div class="star"></div>
                                        </div> */}
                                        <StarRating rating={item.rating} />
                                        <div className="comments">
                                            <p>{item.comment} отзывов</p>
                                        </div>
                                    </div>
                                    <div className="typeOfSeason">
                                        <div className="winter">
                                            <img src={winterIcon} alt="winter"></img>
                                            <p>Зимняя</p>
                                        </div>
                                        <div className="studded">
                                            <img src={studdedIcon} alt="studded"></img>
                                            <p>Шипованая</p>
                                        </div>
                                        <div className="mud">
                                            <img src={mudIcon} alt="mud"></img>
                                            <p>Грязевая</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart">
                                    <div>
                                        <h3 className="price">{item.price} ₽ </h3>
                                        <h3 className="promo">{item.promo}  ₽</h3>
                                    </div>
                                    <div className="quantity">
                                        <div>
                                            <button>-</button>
                                            <div>{item.quantity}</div>
                                            <button>+</button>
                                        </div>
                                        <button>В корзину</button>
                                        <button>
                                            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361  9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 8.80536 18.6666 4.95912 15.8398 2.39496Z" stroke="black"
                                                    stroke-width="2" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button>Купить в один клик</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="arrow-container font-loader">
                <div>
                    <CustomPrevArrow />
                    <CustomNextArrow />
                </div>
                <button>Смотреть все</button>
            </div>
        </>
    );
};


export default SliderComponent;