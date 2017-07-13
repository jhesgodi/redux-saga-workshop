import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from './UserList/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList />
        <button style={{'font-family': '"Montserrat", sans-serif'}} type='button' onClick={this.props.getUserList}>Get Users</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserList: () => dispatch({type: 'GET_RANDOM_USER_LIST'})
});

export default connect(undefined, mapDispatchToProps)(App);
