import React from "react";
import { Route, Link } from "react-router-dom";
import GreetingContainer from './nav/greeting_container'
import Modal from '../components/modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_form';
import Footer from './footer/footer';

const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
            <AuthRoute exact path="/" component={Splash} />
        </header>

        <Footer />
    </div>
);

export default App;