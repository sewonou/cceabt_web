import React from 'react';
import Hero from "../components/frontend/hero";
import Header from "../components/frontend/header";
import PostItem from "../components/frontend/postItem";

const BlogPage = (props) => {
    return (
        <main id="main">
            <Header
                pageTitle="A propos de nous Nous"
                description="Nous sommes ravis de vous entendre ! Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à nous contacter !"
            />
            <section id="recent-posts" className="recent-posts">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Notre Actualités</h2>

                    </div>

                    <div className="row gy-5">
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPage;
