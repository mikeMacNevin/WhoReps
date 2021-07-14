import React, {useReducer} from 'react'
import axios from 'axios'
// 3rd party data apis

import proPublica from '../civic/apis/propublica'
import ProPublicaReducer from './proPublicaReducer'
import googleReps from '../civic/apis/googlereps'
import { PRO_PUBLICA} from '../types'
import ProPublicaContext from './proPublicaContext'

const ProPublicaState = props => {


    let initialState = {
        repPro : []
    }

    // const [state, dispatch] = useReducer(ProPublicaReducer, initialState);
    // console.log("ProPublicaState called ===")
    // // if reps from googleCivicContext
    // const getProPublicaData = async text => {

    //     await proPublica(text).then( (resp) => {
    //             console.log("civic then propub: " + JSON.stringify(resp))
    //             dispatch({
    //                 type: PRO_PUBLICA,
    //                 payload: resp
    //             })  
    //         })
    // }
        return (
            // <ProPublicaContext.Provider
            //     value= {{
            //         getProPublicaData,
            //         repsPro: state.reps
            //     }}>
            // {props.children}
            // </ProPublicaContext.Provider>
            <div></div>
        )}




export default ProPublicaState;


