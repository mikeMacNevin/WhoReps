import React, {useReducer } from 'react'
import axios from 'axios'
import GoogleCivicContext from './googleCivicContext'
import GoogleCivicReducer from './googleCivicReducer'
// apis
import proPublica from './apis/propublica'
import googleReps from './apis/googlereps'

import {SEARCH_ADDRESS} from '../types'

const GoogleCivicState = props => {
    const initialState = {
        reps: []
    }
    const [state, dispatch] = useReducer(GoogleCivicReducer, initialState);
   
    const searchAddress = async text => {
        //Search Google Civic Api for Reps based on Address - return JSON
        const res = await axios.get(
            `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA-alrA4NG9OOesuE1PE-Bb4Cpduujf0Hg&address=${text}`
        )
        // filter the Google Reps Data        
        dispatch({
            type: SEARCH_ADDRESS,
            payload: googleReps(res.data)
        })
    }
    
    const getProPublicaData = async text => {    
        const res = await proPublica(text).then( (resp) => {

        console.log("civic then propub: " + JSON.stringify(resp))
        dispatch({
            type: SEARCH_ADDRESS,
            payload: resp
        })  
        })
    
    }



return (
    <GoogleCivicContext.Provider
        value= {{
            searchAddress,
            reps: state.reps
        }}>
    {props.children}
    </GoogleCivicContext.Provider>
    )
}

export default GoogleCivicState;



