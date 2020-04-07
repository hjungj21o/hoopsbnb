import React from "react";
import { Route, Link } from "react-router-dom";
import SignUpFormContainer from './session/signup_form_container';
import GreetingContainer from './session/greeting_container'
import LoginFormContainer from './session/login_form_container'

const App = () => (
    <div>
        <header>
            <h1>Hoopsbnb Hello</h1>
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />

    </div>
);

export default App;