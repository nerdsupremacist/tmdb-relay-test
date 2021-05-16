
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import DetailedMovieView from 'DetailedMovieView';
import DetailedPersonView from 'DetailedPersonView';
import DetailedShowView from 'DetailedShowView';
import Home from 'Home';
import Navbar from 'Navbar';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/movie/:id">
                        <DetailedMovieView />
                    </Route>
                    <Route path="/person/:id">
                        <DetailedPersonView />
                    </Route>
                    <Route path="/show/:id">
                        <DetailedShowView />
                    </Route>
                    <Route path="*">
                        <h1>Not found!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
