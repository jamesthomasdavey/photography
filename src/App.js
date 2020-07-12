// packages
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
import Navigation from './components/layout/Navigation/Navigation';

// page components
import Contact from './components/pages/Contact/Contact';

class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
