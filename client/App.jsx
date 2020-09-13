import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TemporaryDrawer from './components/Sidebar.jsx';
import OutlinedCard from './components/Cards.jsx';
import Header from './components/Header.jsx';
import SignIn from './components/SignIn.jsx';
// test
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <TemporaryDrawer />
          {/* <Switch>
            <Route exact path='/user' component={LoginPage} />
            <OutlinedCard />
            <ButtonAppBar />
          </Switch> */}
          <SignIn />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
