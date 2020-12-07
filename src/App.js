// packages
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// layout components
// import Navigation from './compone/nts/layout/Navigation/Navigation';
// import Main from './components/layout/Main/Main';

// page components
// import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import Resume from './components/pages/Resume/Resume';
// import ResumePrint from './components/pages/ResumePrint/ResumePrint';

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
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
          {/* <Route exact path='/resume-print' component={ResumePrint} /> */}
        </Switch>
        {/* </Main> */}
      </Router>
    );
  }
}

export default App;
