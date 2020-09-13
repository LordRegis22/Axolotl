import React, { Component } from "react";
import TemporaryDrawer from './components/Sidebar.jsx'
import OutlinedCard from './components/Cards.jsx';
import Header from './components/Header.jsx';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <Header />
      <TemporaryDrawer />
      <OutlinedCard />
      {/* <ButtonAppBar/> */}
    </div>
    )
  }
}

export default App;