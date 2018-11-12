import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';


class App extends Component {

  state = {
    user: null,
  };

  componentDidMount() {
    axios.get('/auth/current_user').then(({ data }) => {
      this.setState({ user: data, loading: false });
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar user={this.state.user} />
          <Switch>
            {/* <Route exact path="/" component={} /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
