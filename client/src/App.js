import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GiftTags from './components/GiftTags/GiftTags';
import NoMatch from './components/NoMatch/NoMatch';
import NavBar from './components/NavBar/NavBar';
import WishList from './components/WishList/WishList';
import WishListForm from './components/WishListForm/WishListForm';
class App extends Component {
  state = {
    user: null,
    matched: null,
  };

  componentDidMount() {
    axios.get('/auth/current_user').then(({ data }) => {
      this.setState({ user: data });
    });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path={'/gifter/:name'} component={GiftTags} />
            <Route exact path={'/gifterProfiles'} component={WishList} />
            <Route exact path={'/gifterForm'} component={WishListForm} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
