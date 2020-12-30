import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";


function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH0_CALLBACK_URI}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      scope="profile email openid"
    >
      <Header />

      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/recipes" component={Recipes} />
      </Router>
    </Auth0Provider>
  );
}

export default App;
