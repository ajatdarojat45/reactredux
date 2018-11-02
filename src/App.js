import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import * as actionCreator from './store/actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div><span>A:</span>{this.props.a}</div>
          <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
        </div>
        <div className="col">
          <div><span>B:</span>{this.props.b}</div>
          <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
        </div>
        {this.props.loading && <img src={logo} className="App-logo"/>}
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    a: store.rA.a,
    b: store.rB.b,
    loading: store.rA.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch(actionCreator.updateA(b : b)),
    updateB: (a) => dispatch(actionCreator.updateB(a : a)),
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
