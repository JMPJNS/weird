import React, { Fragment } from "react";
import "./index.css"
import FreeRobux from "./pages/free-robux";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main>
        <meta property="og:title" content={meta.title}/>
        <meta property="og:type" content={meta.type}/>
        <meta property="og:url" content={meta.url}/>
        <meta name='theme-color' content={meta["theme-color"]}/>
        <meta property="og:image" content={meta.image}/>
        <meta property="og:description" content={meta.description}/>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/free-robux">Robux Generator</a></li>
          </ul>
        </nav>

        <Route path="/free-robux" component={FreeRobux} />
        
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

// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
);
// About Page
const About = () => (
  <Fragment>
    <h1>About</h1>
    <FakeText />
  </Fragment>
);
// Contact Page
const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
    <FakeText />
  </Fragment>
);

const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
)
