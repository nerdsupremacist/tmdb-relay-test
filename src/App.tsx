
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import DetailedEpisodeView from 'DetailedEpisodeView';
import DetailedMovieView from 'DetailedMovieView';
import DetailedPersonView from 'DetailedPersonView';
import DetailedShowView from 'DetailedShowView';
import Home from 'Home';
import Navbar from 'Navbar';

import { usePath } from 'useNodePath';

function App() {
    const moviePath = usePath('Movie');
    const showPath = usePath('TVShow');
    const episodePath = usePath('Episode');
    const personPath = usePath('Person');

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    
                    {
                        moviePath != null && (
                            <Route path={moviePath}>
                                <DetailedMovieView />
                            </Route>
                        )
                    }
                    {
                        showPath != null && (
                            <Route path={showPath}>
                                <DetailedShowView />
                            </Route>
                        )
                    }
                    {
                        episodePath != null && (
                            <Route path={episodePath}>
                                <DetailedEpisodeView />
                            </Route>
                        )
                    }
                    {
                        personPath != null && (
                            <Route path={personPath}>
                                <DetailedPersonView />
                            </Route>
                        )
                    }
                    
                    <Route path="*">
                        <h1>Not found!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
