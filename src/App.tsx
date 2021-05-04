
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DetailedMovieView from './DetailedMovieView';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Link to="/movie/11">Star Wars</Link>
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
