import React, { Component } from 'react';
import TemporaryDrawer from './components/Sidebar.jsx';
import OutlinedCard from './components/Cards.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <TemporaryDrawer />
        </div>
      </BrowserRouter>
    );
  }
}

export default HomePage;
