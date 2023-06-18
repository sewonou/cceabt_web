import React from 'react';

const TestimonialItem = () => {
    return (
        <div className="swiper-slide">
            <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <div className="stars">
                    <i className="bi bi-star-fill"/>
                    <i className="bi bi-star-fill"/>
                    <i className="bi bi-star-fill"/>
                    <i className="bi bi-star-fill"/>
                    <i className="bi bi-star-fill"/>
                </div>
                <p>
                    <i className="bi bi-quote quote-icon-left"/>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                    rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i className="bi bi-quote quote-icon-right"/>
                </p>
            </div>
        </div>
    );
};

export default TestimonialItem;
