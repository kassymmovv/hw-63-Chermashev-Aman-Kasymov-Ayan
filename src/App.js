import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./containers/About/About";
import Add from "./containers/Add/Add";
import Posts from "./containers/Posts/Posts";
import Contacts from "./containers/Contacts/Contacts";
import Redactor from "./containers/Redactor/Redactor";
import EditMessage from "./components/EditMessage/EditMessage";


class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/posts/add" component={Add}/>
              <Route path="/posts" component={Posts}/>
                <Route path="/edit/:id" component={EditMessage}/>
                <Route path="/:id" component={Redactor}/>
              <Route path="/about" component={About}/>
              <Route path="/contacts" component={Contacts}/>

            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;