import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
       <Router>
      <div>
       <Navigation />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/home/:id/detail">
            <Details />
          </Route>
          <Route exact="*" path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
