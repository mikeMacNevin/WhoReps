import Splash from './components/splash/Splash';
import Reps from './components/reps/reps'
import RepPage from './components/reps/RepPage/RepPage'
import GoogleCivicState from './context/civic/GoogleCivicState'


import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import React, { useEffect, useContext } from 'react';

import './index.scss';
import ProPublicaState from './context/propublica/ProPublicaState';


function App() {

  const [appData, setAppData] = React.useState()


  useEffect( () => {
    console.log("APPDOTJS")
  })

  return (
    <GoogleCivicState>
      {/* <ProPublicaState> */}
        <Router>
          <div className="App">
            <header className="App-header">
              <Splash />
              <Route path="/" exact component={Reps}/>
              <Route path="/rep/:repname" component={RepPage}/>
            </header>
          </div>
        </Router>
      {/* </ProPublicaState> */}
    </GoogleCivicState>
  );
}

export default App;
