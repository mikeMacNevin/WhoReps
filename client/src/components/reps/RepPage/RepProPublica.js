import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import ProPublicaContext from '../../../context/propublica/proPublicaContext';
import Reps from './../reps';
import proPublica from '../../../context/civic/apis/propublica';
import proPublicaContext from '../../../context/propublica/proPublicaContext';
import GoogleCivicContext from '../../../context/civic/googleCivicContext';

const RepProPublica = ( repname  ) => {
    let proResult = undefined

    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    
    console.log("wutang")
    useEffect( () => {
        if ( (repname != undefined) && (reps.length > 3)) {
            let lowerName = repname;
            reps.forEach(e => {
                if (lowerName == e.name) {
                    proResult = proPublica(e, repname)

                }
            });

        }

    })

    if (proResult != undefined) {
        return (
            <div>{proResult}</div>
        )
    }
    else {
        return (
            <p>no proResult</p>
        )
    }

}

export default RepProPublica;