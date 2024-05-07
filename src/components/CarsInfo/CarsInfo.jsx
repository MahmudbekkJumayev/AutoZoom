import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function CarsInfo() {
    const { id } = useParams();
    const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
    const [cars, setcars] = useState([])
    const getCars = () => {
        axios
            .get(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/${id}`)
            .then((response) => {
                const carData = response.data.data;
                console.log(carData.car_images);
                if (carData && typeof carData === 'object') {
                    // Convert object to array with a single item
                    setcars([carData]);
                } else {
                    setcars([]); // Set empty array if response is not as expected
                }
            })
            .catch((err) => {
                console.log(err);
                setOneCar([]);
            });
    }
    useEffect(() => {
        getCars();
        console.log(cars);
    }, [id]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='container'>
            {cars &&
                cars.map((item, index) => (

                    <h2 className='text-5xl text-white pb-8'> {item.brand.title} {item.model.name}</h2>
                ))}

            <Row>
                <Col md={3}>
                    <Swiper
                        onClick={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        direction={'vertical'}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {cars &&
                            cars.map((item, index) => (
                                <>
                                    {
                                        item.car_images.map((item, index) => (
                                            <SwiperSlide key={index} className='cars-swiper'>
                                                <img src={`${urlimg}${item.image.src}`} alt={`Car ${index}`} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </>

                            ))}
                    </Swiper>
                </Col>
                <Col md={9}>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {cars &&
                            cars.map((item, index) => (
                                <>
                                {
                                        item.car_images.map((item, index) => (
                                            <SwiperSlide key={index} className='cars-swiper-two'>
                                                <img src={`${urlimg}${item.image.src}`} alt={`Car ${index}`} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </>

                            ))}
                    </Swiper>


                </Col>
                <Col md={12}></Col>
            </Row>
        </div>
    )
}
