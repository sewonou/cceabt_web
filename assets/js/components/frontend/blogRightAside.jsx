import React from 'react';
import BlogRecentItem from "./blogRecentItem";

const BlogRightAside = () => {
    return (
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">

        <div className="sidebar ps-lg-4">

            <div className="sidebar-item search-form">
                <h3 className="sidebar-title">Rechercher</h3>
                <form action="" className="mt-3">
                    <input type="text"/>
                        <button type="submit"><i className="bi bi-search"/></button>
                </form>
            </div>

            <div className="sidebar-item categories">
                <h3 className="sidebar-title">Categories</h3>
                <ul className="mt-3">
                    <li><a href="#">General <span>(25)</span></a></li>
                    <li><a href="#">Lifestyle <span>(12)</span></a></li>
                    <li><a href="#">Travel <span>(5)</span></a></li>
                    <li><a href="#">Design <span>(22)</span></a></li>
                    <li><a href="#">Creative <span>(8)</span></a></li>
                    <li><a href="#">Educaion <span>(14)</span></a></li>
                </ul>
            </div>

            <div className="sidebar-item recent-posts">
                <h3 className="sidebar-title">Recent Posts</h3>

                <div className="mt-3">
                    <BlogRecentItem/>
                    <BlogRecentItem/>
                    <BlogRecentItem/>
                    <BlogRecentItem/>
                </div>

            </div>

            <div className="sidebar-item tags">
                <h3 className="sidebar-title">Tags</h3>
                <ul className="mt-3">
                    <li><a href="#">App</a></li>
                    <li><a href="#">IT</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Smart</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                </ul>
            </div>

        </div>
    </div>
    );
};

export default BlogRightAside;
