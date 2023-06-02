import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper';
import { Link } from 'react-router-dom';

const Projectslider = ({ projectsData }) => {

    return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={50}
            slidesPerView={2}
            freeMode={true}
            onSliderMove={{ visualViewport }}
            autoplay={{
                pauseOnMouseEnter: true,
                delay: 3000
            }}

        >
            {
                projectsData.map((project) => {
                    return (
                        <SwiperSlide key={project.id} style={{ width: "100%" }}>

                            <div className="slider-btns">
                                <h1>{project.title}</h1>
                                <div className="btns">
                                    <Link to="https://github.com/Venkatesh3803/reactTMDBclone" target='_blank'>
                                        <button>Github</button>
                                    </Link>
                                    <Link to="https://tmdbclone2.netlify.app/" target='_blank'>
                                        <button>Go Live</button>
                                    </Link>
                                </div>
                            </div>
                            <img src={project.image} alt={project.title} />
                        </SwiperSlide>
                    )
                })
            }

        </Swiper >
    )
}

export default Projectslider
