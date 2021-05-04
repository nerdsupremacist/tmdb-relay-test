
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './Navbar';
import DetailedMovieView from './DetailedMovieView';
import { Container, Text } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Container><Text textAlign="center" fontSize="4xl" padding={16}>Hi there ;)</Text></Container>
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
