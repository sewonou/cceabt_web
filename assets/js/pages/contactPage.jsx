import React from 'react';
import Header from "../components/frontend/header";
import Footer from "../components/frontend/footer";
import Contact from "../components/frontend/contact";

const ContactPage = (props) => {
    return (
        <main id="main">
            <Header
                pageTitle="Contacter Nous"
                description="Nous sommes ravis de vous entendre ! Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à nous contacter !"
            />
            <Contact/>
            <Footer/>
        </main>

            );
};

export default ContactPage;
