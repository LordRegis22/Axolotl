import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import OutlinedCard from './components/Cards.jsx';
import Header from './components/Header.jsx';
import SignIn from './components/SignIn.jsx';
import { setAllCards } from './actions/action.js';
import * as actions from './actions/action.js';
import { connect } from 'react-redux';
import SignUp from './components/SignUp.jsx';

// import HomePage from './components/Homepage.jsx';

const mapStateToProps = (state) => ({
  cardList: state.cardList,
  newSearch: state.newSearch,
  loggedIn: state.loggedIn,
  cardList: state.cardList,
  currentUser: state.currentUser,
  name: state.name,
  newSearch: state.newSearch,
  newErrorMessage: state.newErrorMessage,
  newTechStack: state.newTechStack,
  newResolution: state.newResolution,
  newDocumentation: state.newDocumentation,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllCards: () => dispatch(actions.fetchAllCards()),
  createCard: (card) => dispatch(actions.createCard(card)),
  addCard: (id) => dispatch(actions.addCard(id)),
  deleteCard: (id) => dispatch(actions.deleteCard(id)),
  updateNewSearch: (search) => dispatch(actions.addSearch(search)),
});

//-----------------styling -------------------//
const classes = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 30,
  },
  submitBtn: {
    marginLeft: 15,
    width: 70,
    height: 40,
    fontSize: 16,
    borderRadius: 15,
    color: '#6c6c6c',
    border: 0,
  },
};

//------------------------------------------------//

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllCards();
  }

  render() {
    // Window.pageYOffsetY > 200px
    const cards = [];
    for (let el of this.props.cardList) {
      cards.push(<OutlinedCard cardList={el} />);
    }
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/user' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
          <br />
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
                style={{
                  width: '450px',
                  height: '40px',
                  outline: 'none',
                  fontSize: '16px',
                  borderRadius: '15px',
                  border: '1px solid #6c6c6c',
                  backgroundColor: '	rgb(248,248,255)',
                }}
                placeholder=' Search an error message '
                type='text'
                // value={}
                // onChange={e => setNewToDo(e.target.value)}
              />
            </label>
            <input
              style={classes.submitBtn}
              // ref={ref}
              type='submit'
              value='Search'
            />
          </form>

          {cards}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
