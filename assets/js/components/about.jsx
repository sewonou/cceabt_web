import React from 'react';

const About = () => {
    return (
        <section id="about" className="about pt-0">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">
                    <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                        <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"/>
                    </div>
                    <div className="col-lg-6 content order-last  order-lg-first">
                        <h3>About Us</h3>
                        <p>
                            Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas
                            deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam
                            ut eius incidunt reiciendis veritatis asperiores placeat.
                        </p>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100">
                                <i className="bi bi-diagram-3"/>
                                <div>
                                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                    <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre
                                        trade</p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-fullscreen-exit"/>
                                <div>
                                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                                    <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna
                                        pasata redi</p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-broadcast"/>
                                <div>
                                    <h5>Voluptatem et qui exercitationem</h5>
                                    <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime
                                        veniam</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

);
};

export default About;
