/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, withRouter} from  'react-router-dom';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import Navbar from "./js/components/navbar";
import HomePage from "./js/pages/homePage";


const NavbarWithRouter = withRouter(Navbar);
const App = () => {
    return (
        <HashRouter>
            <NavbarWithRouter />
            <Switch>

                <Route path="/" component={HomePage} />
            </Switch>
        </HashRouter>
    );
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
