// packages
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
import Navigation from './components/layout/Navigation/Navigation';
import Main from './components/layout/Main/Main';

// page components
import Contact from './components/pages/Contact/Contact';

class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <Navigation />
        <Main>
          <Switch>
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default App;
