import Splash from './components/splash/Splash';
import Reps from './components/reps/reps'
import RepPage from './components/reps/RepPage/RepPage'
import GoogleCivicState from './context/civic/GoogleCivicState'


import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import React, { useEffect } from 'react';

import './index.scss';


function App() {

  const [appData, setAppData] = React.useState()

  useEffect( () => {
    fetch('/mike', {
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
      .then((res) => {
      
        console.log("App.js fetch: hello")
        res.json()
      })
      .then((data) => setAppData)
  })

  return (
    <GoogleCivicState>
      <Router>
        <div className="App">
          <header className="App-header">
            <Splash />
            <Route path="/" exact component={Reps}/>
            <Route path="/rep/:repname" component={RepPage}/>
          </header>
        </div>
      </Router>
    </GoogleCivicState>
  );
}

export default App;