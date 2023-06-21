import React from 'react';
import Hero from "../components/frontend/hero";
import Missions from "../components/frontend/missions";
import About from "../components/frontend/about";
import Partner from "../components/frontend/partner";
import Goals from "../components/frontend/goals";
import Footer from "../components/frontend/footer";
import Faq from "../components/frontend/faq";
import Testimonials from "../components/frontend/testimonials";
import RecentPosts from "../components/frontend/recentPosts";
import Action from "../components/frontend/action";


const HomePage = (props) => {
    return (
        <>
        <Hero />
        <main id="main">
            <Partner/>
            <Goals/>
            <About />
            <Action/>
            <Missions />
            <Testimonials/>
            <RecentPosts/>
            <Faq/>
        </main>
        <Footer/>
        </>
    );
};

export default HomePage;
