import React from 'react';
import ReactDOM from 'react-dom';
import { fetchArenas, fetchArena } from './actions/arena_actions';
import configureStore from './store/store';
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.user) {
        const preloadedState = {
            entities: {
                users: { [window.user.id]: window.user }
            },
            session: { id: window.user.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //TESTING
    window.fetchArenas = fetchArenas;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchArena = fetchArena;
    //TESTING
    ReactDOM.render(<Root store={store}/>, root);
})