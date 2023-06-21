import React from 'react';
import Hero from "../components/frontend/hero";
import Header from "../components/frontend/header";
import Counter from "../components/frontend/counter";
import Footer from "../components/frontend/footer";
import About from "../components/frontend/about";
import Partner from "../components/frontend/partner";
import Team from "../components/frontend/team";
import Faq from "../components/frontend/faq";
import Testimonials from "../components/frontend/testimonials";

const AboutPage = (props) => {
    return (
        <main id="main">
            <Header
                pageTitle="A propos de nous Nous"
                description="Nous sommes ravis de vous entendre ! Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à nous contacter !"
            />
            <Partner/>
            <About/>
            <Counter/>
            <Team />
            <Testimonials/>
            <Faq/>

            <Footer/>
        </main>
       );
};

export default AboutPage;
