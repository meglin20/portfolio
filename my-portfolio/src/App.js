import logo from './logo.svg';
import React, {Component } from "react"; 
import Navbar from './components/Navbar'
import './App.css';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Nacro from './pages/Nacro';
import ZUZ from './pages/ZUZ';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";


class App extends Component{
  render() {
      return(
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/home" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/about" component={About} />
            <Route exact path="/nacro" component={Nacro} />
            <Route exact path="/zuz" component={ZUZ} />
          </Switch>
        </Router>
      </div>
  );
  }
}

export default App;
