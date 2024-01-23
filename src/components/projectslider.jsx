import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper';
import { Link } from 'react-router-dom';

const Projectslider = ({ projectsData }) => {

    return (

        <Swiper
            modules={[Autoplay, FreeMode, ]}
            spaceBetween={50}
            slidesPerView={1}
            freeMode={true}
            onSliderMove={{ visualViewport }}
            autoplay={{
                pauseOnMouseEnter: true,
                delay: 2000
            }}
        >
            {
                projectsData.map((project) => {
                    return (
                        <SwiperSlide key={project.id} style={{ width: "100%" }} >

                            <div className="slider-btns">
                                <h1>{project.title}</h1>

                                <div className="btns">
                                    <Link to={project.gitHub} target='_blank'>
                                        <button>Github</button>
                                    </Link>
                                    <Link to={project.liveProject} target='_blank'>
                                        <button>Go Live</button>
                                    </Link>
                                </div>
                            </div>

                            <p style={{marginBottom:"10px"}}>technology :- {project.technologies}</p>


                            <Link to={`project/${project
                                .id}`}>

                                <img src={project.image} alt={project.title} />
                            </Link>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper >
    )
}

export default Projectslider
