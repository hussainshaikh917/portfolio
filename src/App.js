// import logo from './logo.svg';
import './App.css';
import { Navbar } from "./MyComponents/Navbar";
import { About } from "./MyComponents/About";
import { Home } from "./MyComponents/Home";
import { Contact } from "./MyComponents/Contact";
import { Project } from "./MyComponents/Project";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import { useState } from 'react';
function App() {

  // const [blue, setblue] = useState(true);

  // const funblue=()=>{
        
  //        setblue("true")
  // }
  return (
    <div className="App">

     
      {/* <Home/> */}
      {/* <About/> */}
      
      {/* <Contact /> */}

      <Router>
      <Navbar />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
          <Project />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          
          
        </Switch>

      </Router>


    </div>
  );
}

export default App;
