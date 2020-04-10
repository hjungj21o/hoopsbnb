import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from './nav/greeting_container'
import Modal from '../components/modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_form';
import Footer from './footer/footer';
import ArenaIndexContainer from './arenas/arena_index_container';
import ArenaShowContainer from './arenas/arena_show_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
        </header>
        <div className="routes">
            <Switch>
                <AuthRoute exact path="/" component={Splash} />
                <Route exact path="/arenas" component={ArenaIndexContainer} />
                <Route path="/arenas/:arenaId" component={ArenaShowContainer} />
            </Switch>
            <Footer />
        </div>
    </div>
);

export default App;