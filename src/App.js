// packages
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './components/pages/Home/Home';

class App extends React.Component {
  state = {};
  render() {
    document.title = 'Photographs | James Thomas Davey';
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
