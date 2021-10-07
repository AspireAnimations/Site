import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Motion from './components/Motion';
import Feature from './components/Feature';
import Short from './components/Short';
import Detail from "./components/Detail";
import Hire from './components/Hire';

function App() {
  return (
    <div className="App">
      <Router>
        
      <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/motion'>
            <Motion />
          </Route>
          <Route path='/feature'>
            <Feature />
          </Route>
          <Route path='/short'>
            <Short />
          </Route>
          <Route path='/hire'>
            <Hire />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
