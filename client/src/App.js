import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import GiftTags from './components/GiftTags/GiftTags';


class App extends Component {

  state = {
    user: null,
    matched: null
  };

  getRandom = () => {
    const family = ["Gina", "Keith", "Angela", "Matt", "Katharine", "Rid"];
    // if(this.state.user.name === "gina"){
    //  let yourMatch === "Alex"
    //  return yourMatch;
    // } 
    let yourMatch = family[Math.floor(Math.random() * family.length)];
    this.setState({ matched: true })
    return yourMatch;
  }


  updateUser = (updatedUser) => {
    axios.put("/api/users/" + this.state.user._id, updatedUser).then(({ data }) => {
      this.setState({ user: data });
    });
  }


  componentDidMount() {
    axios.get('/auth/current_user').then(({ data }) => {
      this.setState({ user: data });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.state.user} />
          <GiftTags user={this.state.user} matched={this.state.matched} getRandom={this.getRandom} updateUser={this.updateUser}></GiftTags>
          <Switch>
            {/* <Route exact path="/" component={} /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
