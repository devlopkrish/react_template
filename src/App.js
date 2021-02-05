import logo from './logo.svg';
import './App.css';
import Test from './test';
import Login from './Intro/Components/login';
import Stage from './stage';
import Intro from './Intro/intro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './MainPage/mainpage';








function App() {
  return (
    <Router>

    <Switch>
      <div className="App">

      <Route path="/" exact component={Intro} />
       
      <Route path="/main" component={MainPage} />

      <Route path="/stage" component={Stage} />

      </div>
      </Switch>
    </Router>

  )



}

export default App;
