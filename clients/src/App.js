import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter,Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <br/>
          <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          {/* {console.log( <Route path="p1:hello" component={hello}/>)} */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
