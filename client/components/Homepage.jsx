import React, { Component } from 'react';
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
          <OutlinedCard />
        </div>
      </BrowserRouter>
    );
  }
}

export default HomePage;
