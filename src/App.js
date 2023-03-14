import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apartment from "./pages/Apartment";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/apartmani" exact component={Apartment}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;