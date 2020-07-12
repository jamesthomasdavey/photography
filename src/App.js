// packages
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
import Navigation from './components/layout/Navigation/Navigation';

// page components
import About from './components/pages/About/About';

class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
