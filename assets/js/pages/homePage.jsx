import React from 'react';
import Hero from "../components/hero";
import Missions from "../components/missions";
import About from "../components/about";
import Partner from "../components/partner";
import Goals from "../components/goals";
import Footer from "../components/footer";
import Faq from "../components/faq";
import Testimonials from "../components/testimonials";
import RecentPosts from "../components/recentPosts";
import Action from "../components/action";


const HomePage = (props) => {
    return (
        <>
        <Hero />
        <main >
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
