import React from 'react';
import TestimonialItem from "./testimonialItem";

const Testimonials = () => {
    return (<section id="testimonials" className="testimonials">
        <div className="container">

            <div className="slides-1 swiper" data-aos="fade-up">
                <div className="swiper-wrapper">
                    <TestimonialItem/>
                    <TestimonialItem/>
                </div>
                <div className="swiper-pagination"/>
            </div>

        </div>
    </section>
    );
};

export default Testimonials;
