import logo from './logo.svg';
import './App.css';
import Test from './test';
import Login from './Intro/Components/login';
import Stage from './stage';
import Intro from './Intro/intro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'








function App() {
  return (
    <Router>

    <Switch>
      <div>

      <Route path="/" exact component={Intro} />
       
      <Route path="/stage" component={Stage} />

      </div>
      </Switch>
    </Router>

  )



}

export default App;
