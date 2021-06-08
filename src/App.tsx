
import React from 'react';
import useMetaTags from 'react-metatags-hook';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';

import DetailedEpisodeView from 'DetailedEpisodeView';
import DetailedMovieView from 'DetailedMovieView';
import DetailedPersonView from 'DetailedPersonView';
import DetailedShowView from 'DetailedShowView';
import Home from 'Home';
import Navbar from 'Navbar';

import { pathLink } from 'routes';

function App() {
    const themeColorName = useColorModeValue('white', 'gray.800');
    const themeColor = `var(--chakra-colors-${themeColorName})`;
    useMetaTags({
        metas: [
            {
                content: themeColor,
                name: 'theme-color',
            },
        ],
    }, [themeColor]);

    const moviePath = pathLink('Movie');
    const showPath = pathLink('TVShow');
    const episodePath = pathLink('Episode');
    const personPath = pathLink('Person');

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path={moviePath}>
                        <DetailedMovieView />
                    </Route>
                    
                    <Route path={showPath}>
                        <DetailedShowView />
                    </Route>
                    
                    <Route path={episodePath}>
                        <DetailedEpisodeView />
                    </Route>

                    <Route path={personPath}>
                        <DetailedPersonView />
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
