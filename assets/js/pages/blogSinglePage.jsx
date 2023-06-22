import React from 'react';
import Hero from "../components/frontend/hero";
import Header from "../components/frontend/header";
import BlogSingle from "../components/frontend/blogSingle";
import BlogRightAside from "../components/frontend/blogRightAside";

const BlogSinglePage = (props) => {
    return (
        <main id="main">
            <Header
                pageTitle="Le titre de l'article"
                description="Description de l'article pour le SEO à réafficher ici"
            />
            <section id="blog" className="blog">
                <div className="container" data-aos="fade-up">

                    <div className="row g-5">
                        <BlogSingle/>
                        <BlogRightAside/>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default BlogSinglePage;
