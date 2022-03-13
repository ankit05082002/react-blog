
import logo from './logo.svg';

import './App.css';
import About from './about';
import Contact from './contact';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/about">Home</Link>
        <Link to="/about">Contact US</Link>
        <Link to="/about">About</Link>
        <Link to="/about">user list</Link>
      <h1>
        Hello from react
      </h1>
      <About />
      <Contact/>
      </Router>
    </div>
  );
}

export default App;
