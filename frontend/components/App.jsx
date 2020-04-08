import React from "react";
import { Route, Link } from "react-router-dom";
import GreetingContainer from './nav/greeting_container'
import Modal from '../components/modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />

        </header>

    </div>
);

export default App;