import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import GiftTags from "./components/GiftTags/GiftTags";
import XmasContainer from "./components/XmasContainer/XmasContainer";
import WishList from "./components/WishList/WishList";
import WishListForm from "./components/WishListForm/WishListForm";

class App extends Component {
  state = {
    user: null,
    matched: null
    // what are gifters doing here??
  };

  // does this need to be gifter now??
  // updateUser = (updatedUser) => {
  //   axios.put("/api/users/" + this.state.user._id, updatedUser).then(({ data }) => {
  //     this.setState({ user: data });
  //   });
  // }

  componentDidMount() {
    axios.get("/auth/current_user").then(({ data }) => {
      this.setState({ user: data });
    });
  }

  // where is the gifter??? need to pass to navbar

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path={"/gifter/:name"} component={GiftTags} />
        </Router>
      </div>
    );
  }
}

export default App;
