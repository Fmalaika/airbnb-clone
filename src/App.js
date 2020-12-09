import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchPage from './components/Search/SearchPage';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from "react-router-dom";

function App() {

  return (

    <div className="App">
        <Router>
          <Header />
          <Switch>
              <Route path="/search">
                  <SearchPage />
              </Route>
              <Route path="/">
                  <Home />
              </Route>

          </Switch>

          <Footer />
        </Router>
    </div>
  );
}

export default App;
