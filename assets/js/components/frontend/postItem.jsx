import React from 'react';

const PostItem = () => {
    return (
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="post-box">
                <div className="post-img"><img src="assets/img/blog/blog-1.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="meta">
                    <span className="post-date">Tue, December 12</span>
                    <span className="post-author"> / Julia Parker</span>
                </div>
                <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores
                    eum ipsa est officiis. Modi qui magni est...</p>
                <a href="#" className="readmore stretched-link">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"/>
                </a>
            </div>
        </div>

    );
};

export default PostItem;
