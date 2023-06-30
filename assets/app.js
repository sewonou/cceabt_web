/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route } from  'react-router-dom';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import AuthAPI from "./js/services/authAPI";
import Navbar from "./js/components/frontend/navbar";
import DashboardNavbar from "./js/components/dashboard/dashboardNavbar";
import HomePage from "./js/pages/homePage";
import AboutPage from "./js/pages/aboutPage";
import BlogPage from "./js/pages/blogPage";
import BlogSinglePage from "./js/pages/blogSinglePage";
import ResourcesPage from "./js/pages/resourcesPage";
import ContactPage from "./js/pages/contactPage";
import ContactsPage from "./js/pages/contactsPage";
import DonatePage from "./js/pages/donatePage";
import LoginPage from "./js/pages/dashboard/loginPage";
import authAPI from "./js/services/authAPI";


const App = () => {
    const path = AuthAPI.getPath();
    return (
        <HashRouter>
        {path === '/admin/' ? <DashboardNavbar /> : <Navbar />}
        <main>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/actualities/details" component={BlogSinglePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/donate" component={DonatePage} />
                <Route path="/resources" component={ResourcesPage} />
                <Route path="/contacts" component={ContactsPage} />
                <Route path="/actualities" component={BlogPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </main>
        </HashRouter>
    )
};
console.log(AuthAPI.getPath());
const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
