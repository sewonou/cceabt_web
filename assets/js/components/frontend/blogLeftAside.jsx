import React from 'react';
import BlogItem from "./blogItem";

const BlogLeftAside = () => {
    return (
        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

        <div className="row gy-5 posts-list">

            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>

        </div>

        <div className="blog-pagination">
            <ul className="justify-content-center">
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
            </ul>
        </div>

    </div>
    );
};

export default BlogLeftAside;
