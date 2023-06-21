import React from 'react';
import CounterItem from "./counterItem";

const Counter = () => {
    return (<section id="stats-counter" className="stats-counter pt-0">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">
                    <CounterItem
                        counterTitle="Projets"
                        startCount="0"
                        endCount="252"
                    />
                    <CounterItem
                        counterTitle="Projets"
                        startCount="0"
                        endCount="252"
                    />
                    <CounterItem
                        counterTitle="Projets"
                        startCount="0"
                        endCount="252"
                    />
                    <CounterItem
                        counterTitle="Projets"
                        startCount="0"
                        endCount="252"
                    />



                </div>

            </div>
        </section>
    );
};

export default Counter;
