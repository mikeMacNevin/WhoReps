import './Splash.scss';
import React, {  useContext } from 'react'

import GoogleCivicContext from '../../context/civic/googleCivicContext'

import AddressForm from './AddressForm';
import congress from '../../assets/congress.jpg'



const Splash = () => {

const googleCivicContext = useContext(GoogleCivicContext)
const { reps, searchAddress } = googleCivicContext;


    if  (reps.length < 3) {
        return (
            <div className="Splash">
                <div className="SplashImage  text-white">
                    {/* <h1>WHO</h1>
                    <h2><i>Represents</i></h2>
                    <h1>YOU?</h1> */}

                    <AddressForm />

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="Splash">
            <div className="SplashImage  text-white">
                {/* <h1>WHO</h1>
                <h2><i>Represents</i></h2>
                <h1>YOU?</h1> */}

                    <div class="container no-address-form"></div>

            </div>
        </div>
    )
        
    }
}

export default Splash;