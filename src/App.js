import React from 'react';
import { Component } from 'react';
import UserCard from './components/UserCard';
import Navbar from './components/Navbar';
import User from './components/User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(userJson => this.setState({ users: userJson.data }))
      .catch((error) => console.log(error));
  }

  render() {

    const renderedUsers = this.state.users.map((user, index) => {
      return (<UserCard user={user} />);
    });

    return (
      <Router>
        <Switch>
          <Route path="/usuarios" exact>
            <div className="home-container">
              <Navbar />
              <div className="content-container">
                <div className="rutas-container">
                  <Link to={'/usuarios'}>
                    <h2>Lista de Usuarios</h2>
                  </Link>
                  <hr />
                </div>
                <div className="users-container">
                  <div className="title-cards-container">
                    <h1>LISTA DE USUARIOS</h1>
                  </div>
                  <div className="cards-container">
                    <hr />
                    <div className="cards-content">
                      {renderedUsers}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/usuarios/:id">
            <div className="unique-user-container">
              <Navbar />
              <div className="content-users-container">
                <div className="rutas-container">
                  <h2>
                    <Link to={'/usuarios'} exact>
                      Lista de Usuarios
                    </Link>
                    -> Detalle de Usuario
                  </h2>
                  <hr />
                </div>
                <User/>
              </div>
            </div>
          </Route>
        </Switch>
      </Router >


    );
  }
}

export default App;
