import React from 'react';
import FaqItem from "./faqItem";

const Faq = () => {
    return (
        <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <span>Frequently Asked Questions</span>
                    <h2>Frequently Asked Questions</h2>

                </div>

                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-10">

                        <div className="accordion accordion-flush" id="faqlist">

                           <FaqItem
                               id="faq-content-1"
                               question="Non consectetur a erat nam at lectus urna duis?"
                               answer="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
                           />

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Faq;
