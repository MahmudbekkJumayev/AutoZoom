import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <div className='Carousel'>
            <div className="container">
                 <div className='flex'>
                 <h2 className='text-white text-4xl font-light'>BUDGET CARS RENTAL DUBAI</h2>
                 <p className='text-white text-2xl font-light'>SEE ALL</p>
                 </div>
                   <Slider
                     {...settings}>
                    <div>Slider1</div>
                    <div>Slider2</div>
                    <div>Slider3</div>
                    </Slider>

            </div>
        </div>
    )
}
