import React, { Component } from "react";
import TemporaryDrawer from './components/Sidebar.jsx'



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <TemporaryDrawer />
    <h1>Axolotl</h1>
    </div>
    )
  }
}

export default App;