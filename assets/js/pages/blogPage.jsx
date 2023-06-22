import React from 'react';
import Hero from "../components/frontend/hero";
import Header from "../components/frontend/header";
import PostItem from "../components/frontend/postItem";
import BlogLeftAside from "../components/frontend/blogLeftAside";
import BlogRightAside from "../components/frontend/blogRightAside";

const BlogPage = (props) => {
    return (
        <main id="main">
            <Header
                pageTitle="A propos de nous Nous"
                description="Nous sommes ravis de vous entendre ! Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à nous contacter !"
            />
            <section id="blog" className="blog">
                <div className="container" data-aos="fade-up">

                    <div className="row g-5">
                        <BlogLeftAside/>
                        <BlogRightAside/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPage;
