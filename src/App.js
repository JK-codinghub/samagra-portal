
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './site/pages/Home';
import AboutUs from './site/pages/AboutUs';
import Services from './site/pages/Services';
import Navbar from './site/layout/Navbar';
import Sevasindhu from './site/pages/Sevasindhu'
import Events from './site/pages/Events'
import Footer1 from './site/layout/Footer1'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Revenue from './site/pages/Revenue';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/seva" component={Sevasindhu}/>
        <Route exact path="/about" component={AboutUs}/>
        <Route exact path="/event" component={Events}/>
        <Route exact path="/revenue" component={Revenue}/>
      </Switch>
      <Footer1/>
    </div>
    </Router>
    
  );
}

export default App;
