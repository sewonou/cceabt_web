import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <NavLink to="/" className="logo d-flex align-items-center">
                    <h1>CCEABT</h1>
                </NavLink>

                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"/>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"/>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><NavLink to="/" className="active">Accueil</NavLink></li>
                        <li><NavLink to="/about">Qui sommes nous</NavLink></li>
                        <li><NavLink to="/actualities">Activités</NavLink></li>
                        <li className="dropdown">
                            <a href="#"><span>Base de données</span><i className="bi bi-chevron-down dropdown-indicator"/></a>
                            <ul>
                                <li><NavLink to="/resources">Ressources documentaires</NavLink></li>
                                <li><NavLink to="/contacts">Annuaires</NavLink></li>
                                <li><a href="https://www.pseau.org/fr/bases" target="_blank">Base de données PSEAU</a></li>
                            </ul>
                        </li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to= "/donate" className="get-a-quote" href="#">Nous soutenir</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
