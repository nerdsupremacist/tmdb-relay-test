
import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import DetailedMovieView from './DetailedMovieView';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Container>
              <Text fontSize="4xl" padding={16} textAlign="center">
                Hi there!
                <br />
                Use the search bar to search for any movie ;)
                </Text>
            </Container>
          </Route>
          <Route path="/movie/:id">
            <DetailedMovieView />
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
