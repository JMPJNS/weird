import React, { Fragment } from "react";
import "./index.css"
import FreeRobux from "./pages/FreeRobux";
import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";
import RealScribble from "./pages/RealScribble"

export default class App extends React.Component {
  
  constructor(props: {}) {
    super(props)
    this.state = {active: "Home"}
  }
  state: {active: string}
  
  render() {
    return (
      <Router>
        <main>
          <nav>
            <NavLink className="nav-item" exact={true} to='/' activeStyle={{color: "red"}}>Home</NavLink>
            <NavLink className="nav-item" exact={true} onClick={ (e) => window.open("https://github.com/JMPJNS/weird", "_blank")} to='/source' activeStyle={{color: "red"}}>Source Code</NavLink>
            <NavLink className="nav-item" to='/free-robux' activeStyle={{color: "red"}}>Robux Generator</NavLink>
            <NavLink className="nav-item" to='/real-scribble' activeStyle={{color: "red"}}>Real Scribble</NavLink>
          </nav>

          <div className="do-center">
            <Route path="/free-robux" component={FreeRobux}/>
            <Route path="/real-scribble" component={RealScribble}/>
            <Route exact path="/" component={FakeText}/>
          </div>

        </main>
      </Router>
    );
  }
}

const FakeText = () => (
  <p style={{color: "white"}}>No You</p>
)
