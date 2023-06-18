import React from 'react';

const Navbar = (props) => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="#" className="logo d-flex align-items-center">
                    <h1>CCEABT</h1>
                </a>

                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"/>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"/>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li className="dropdown"><a href="#"><span>Drop Down</span> <i
                            className="bi bi-chevron-down dropdown-indicator"/></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i
                                    className="bi bi-chevron-down dropdown-indicator"/></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Contact</a></li>
                        <li><a className="get-a-quote" href="#">Get a Quote</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
