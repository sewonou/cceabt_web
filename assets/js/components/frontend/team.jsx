import React from 'react';
import TeamItem from "./teamItem"

const Team = () => {
    return (
        <section id="team" className="team pt-0">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
                <span>Notre Equipe</span>
                <h2>Notre Equipe</h2>

            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
                <TeamItem
                    memberName="Raoul SANOGO"
                    memberDescription="un coordonateur et visionnaire emblématique"
                    memberTitle="Coordonateur"
                />
                <TeamItem
                    memberName="Raoul SANOGO"
                    memberDescription="un coordonateur et visionnaire emblématique"
                    memberTitle="Coordonateur"
                />
                <TeamItem
                    memberName="Raoul SANOGO"
                    memberDescription="un coordonateur et visionnaire emblématique"
                    memberTitle="Coordonateur"
                />
            </div>
        </div>
        </section>
    );
};

export default Team;
