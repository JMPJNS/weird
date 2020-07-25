import React, { Fragment } from "react";
import "./index.css"
import FreeRobux from "./pages/free-robux";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/free-robux">Robux Generator</a></li>
          </ul>
        </nav>

        <Route path="/free-robux" component={FreeRobux} />
        <Route exact path="/" component={FakeText} />
        
      </main>
    </Router>
  );
}

const meta = {
  title: "JMP's Weird Stuff",
  type: "website",
  url: "https://weird.jmp.blue",
  "theme-color": "#ff00ff",
  image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.catster.com%2Fwp-content%2Fuploads%2F2018%2F04%2FAngry-cat-sound-and-body-language.jpg&f=1&nofb=1",
  description: "JMP's Weird Random Projects"
}

const FakeText = () => (
  <p>No You</p>
)
