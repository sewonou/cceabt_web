import React from 'react';
import PostItem from "./postItem";

const RecentPosts = () => {
    return (
        <section id="recent-posts" className="recent-posts">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
                <h2>Recent Blog Posts</h2>

            </div>

            <div className="row gy-5">
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>


            </div>

        </div>
    </section>
    );
};

export default RecentPosts;
