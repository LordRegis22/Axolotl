import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import OutlinedCard from './components/Cards.jsx';
import Header from './components/Header.jsx';
import SignIn from './components/SignIn.jsx';
import { setAllCards } from './actions/action.js';
import * as actions from './actions/action.js';
import { connect } from 'react-redux';
import SignUp from './components/SignUp.jsx';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CreateCardForm } from './components/CreateCardForm.jsx';
import { MultipleSelect } from './components/DropdownMenu.jsx';

// import HomePage from './components/Homepage.jsx';

const mapStateToProps = (state) => ({
  cardList: state.cardList,
  newSearch: state.newSearch,
  cardList: state.cardList,
  currentUser: state.currentUser,
  name: state.name,
  newSearch: state.newSearch,
  newErrorMessage: state.newErrorMessage,
  newTechStack: state.newTechStack,
  newResolution: state.newResolution,
  newDocumentation: state.newDocumentation,
  readyToDisplay: state.readyToDisplay,
  technologies: state.technologies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCards: () => dispatch(actions.fetchAllCards()),
  createCard: (card) => dispatch(actions.createCard(card)),
  addCard: (id) => dispatch(actions.addCard(id)),
  deleteCard: (id) => dispatch(actions.deleteCard(id)),
  setNewSearch: (search) => dispatch(actions.setNewSearch(search)),
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
    const cards = this.props.readyToDisplay ? (
      this.props.cardList.map((card) => (
        <OutlinedCard
          cardList={card}
          deleteCard={this.props.deleteCard}
        ></OutlinedCard>
      ))
    ) : (
      <h1>LOADING LOADING LOADING LOADING</h1>
    );
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <h1>Welcome!</h1>
                  <h1> Please Log In</h1>
                </Fragment>
              )}
            />
            <Route exact path='/signin' component={SignIn} />
          </Switch>
          <button
            onClick={() =>
              this.props.createCard({
                creator: this.props.currentUser.userId,
                errorMsg: this.props.newErrorMessage,
                resolution: this.props.newResolution,
                documentation: this.props.newDocumentation,
                techStack: this.props.newTechStack,
              })
            }
          >
            <h1>CREATE</h1>
          </button>

          <br />
          <br />
          <br />
          <br />
          <br />

          <Switch>
            <Link to='/new'>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
                startIcon={<AddIcon></AddIcon>}
              >
                New
              </Button>
              <Route exact path='/new' component={CreateCardForm} />
            </Link>
          </Switch>

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
                value={this.props.newSearch}
                onChange={(e) => this.props.setNewSearch(e.target.value)}
              />
            </label>
            <input
              style={classes.submitBtn}
              // ref={ref}
              type='submit'
              value='Search'
            />
          </form>
          <div className='card-display'>{cards}</div>

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
