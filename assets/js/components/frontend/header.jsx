import React from 'react';

const Header = ({pageTitle, description}) => {
    return (
            <div className="breadcrumbs">
                <div className="page-header d-flex align-items-center bg-header">
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2>{pageTitle}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="container">
                        <ol>
                            <li><a href="/">Accueil</a></li>
                            <li>{pageTitle}</li>
                        </ol>
                    </div>
                </nav>
            </div>
    );
};

export default Header;
