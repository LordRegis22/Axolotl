import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/action.js';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Account Login</h1>
        <form>
          <div>
            <label htmlFor='email'>Username</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
          </div>
          <input type='submit' value='Login' className='button' />
        </form>
      </div>
    );
  }
}

export default LoginPage;
