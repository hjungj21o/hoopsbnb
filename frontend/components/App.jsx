import React from "react";
import { Route, Link } from "react-router-dom";
import GreetingContainer from './nav/greeting_container'
import Modal from '../components/modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <nav className="nav">Hoopsbnb
            <GreetingContainer />
            </nav>
        </header>

    </div>
);

export default App;