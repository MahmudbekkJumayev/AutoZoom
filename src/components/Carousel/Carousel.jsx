import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kia from '../../assets/kia.png'
export default function Carousel({title}) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
        <div className='Carousel bg-gray-900 p-[30px]'>
            <div className="container ">
                <div className='flex justify-between p-[20px]'>
                    <h2 className='text-white text-3xl font-light'>{title}</h2>
                    <p className='text-white text-xl font-light'>SEE ALL</p>
                </div>
                <Slider
                    {...settings}>
                    <div className='h-[450px] bg-rebeccapurple rounded-3xl p-[20px] pb-[30px]  flex justify-center items-center hover:bg-gradient-to-br from-gray-600 to-gray-900'>
                        <img className='w-80 h-35 object-cover m-[0 auto] mb-[80px] mt-[50px] ' src={kia} alt="" />
                        <h5 className='text-white text-2xl font-light pb-4'>Kia K55</h5>
                        <hr className='border-white pb-5' />
                        <h3 className='text-white text-xl font-light pb-4'>AED 300 / $ 80 </h3>
                        <p className='text-white text-xl font-light pb-4'>per day</p>
                    </div>
                    <div className='h-[450px] bg-rebeccapurple rounded-3xl p-[20px] pb-[30px]  flex justify-center items-center hover:bg-gradient-to-br from-gray-600 to-gray-900'>
                        <img className='w-80 h-35 object-cover m-[0 auto] mb-[80px] mt-[50px] ' src={kia} alt="" />
                        <h5 className='text-white text-2xl font-light pb-4'>Kia K5</h5>
                        <hr className='border-white pb-5' />
                        <h3 className='text-white text-xl font-light pb-4'>AED 300 / $ 80 </h3>
                        <p className='text-white text-xl font-light pb-4'>per day</p>
                    </div>

                    <div className='h-[450px] bg-rebeccapurple rounded-3xl p-[20px] pb-[30px]  flex justify-center items-center hover:bg-gradient-to-br from-gray-600 to-gray-900'>
                        <img className='w-80 h-35 object-cover m-[0 auto] mb-[80px] mt-[50px] ' src={kia} alt="" />
                        <h5 className='text-white text-2xl font-light pb-4'>Kia K5</h5>
                        <hr className='border-white pb-5' />
                        <h3 className='text-white text-xl font-light pb-4'>AED 300 / $ 80 </h3>
                        <p className='text-white text-xl font-light pb-4'>per day</p>
                    </div>
                </Slider>

            </div>
        </div>
    )
}
