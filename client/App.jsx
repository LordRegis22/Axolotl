import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import OutlinedCard from './components/Cards.jsx';
import Header from './components/Header.jsx';
import SignIn from './components/SignIn.jsx';

// import HomePage from './components/Homepage.jsx';


//-----------------styling -------------------//
const classes = {
  form: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 30,
  },
  submitBtn: {
    marginLeft: 15,
    width: 70,
    height: 40,
    fontSize: 16,
    borderRadius: 15,
    color: "#6c6c6c",
    border: 0
   },
}

//------------------------------------------------//
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <br/>
          <br />
          <br />
          <br />
          <br />
          <form 
        style={classes.form}
        // onSubmit={handleSubmit}
        >
        <label>
          <input
            style={{width: "450px", height:"40px", outline:"none", fontSize:"16px", borderRadius:"15px", border:'1px solid #6c6c6c'}}
            placeholder=" Search a problem "
            type="text"
            // value={}
            // onChange={e => setNewToDo(e.target.value)}
          />
           </label>
           <input
            style={classes.submitBtn}
            // ref={ref}
           type="submit" value="Search"/>
        </form>
          <OutlinedCard />
          {/* <TemporaryDrawer /> */}
          {/* <Switch>
            <Route exact path='/user' component={LoginPage} />
            <OutlinedCard />
            <ButtonAppBar />
          </Switch> */}
          {/* <SignIn /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
