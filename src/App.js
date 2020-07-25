// packages
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
import Navigation from './components/layout/Navigation/Navigation';
import Main from './components/layout/Main/Main';

// page components
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume/Resume';

class App extends React.Component {
  state = {};
  render() {
    document.title = 'James Thomas Davey';
    return (
      <Router>
        {/* <Navigation /> */}
        {/* <Main> */}
        <Switch>
          {/* <Route exact path='/contact' component={Contact} /> */}
          <Route exact path='/resume' component={Resume} />
        </Switch>
        {/* </Main> */}
      </Router>
    );
  }
}

export default App;
