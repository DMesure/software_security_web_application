import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
      </Router>
    </>
  );
}

export default App;
