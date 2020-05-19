import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from '../components/modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_form';
import SplashContainer from './splash/splash_form_container';
import Footer from './footer/footer';
import ArenaShowContainer from './arenas/arena_show_container';
import SearchContainer from './search/search_container';
import BookingIndexContainer from './bookings/bookings_index_container';

const App = () => (
    <div>
        <Modal />
        <div className="routes">
            <Switch>
                <AuthRoute exact path="/" component={SplashContainer} />
                <Route exact path="/arenas" component={SearchContainer} />
                <Route exact path="/arenas/:arenaId" component={ArenaShowContainer} />
                <AuthRoute exact path="/users/:userId/bookings" component={BookingIndexContainer} />
            </Switch>
            <Footer />
        </div>
    </div>
);

export default App;