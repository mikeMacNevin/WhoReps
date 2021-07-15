import React, {cloneElement, useContext, useEffect, useState} from 'react'
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

    

    var currentRep
    var finalRep
    useEffect( () => {
        console.log("RPP useEffect()")
        console.log('RPP typeof repname.repname: ' + typeof repname.repname)
        console.log('RPP repname: ' + JSON.stringify(repname.repname))

        if (reps.length > 3) {
            reps.forEach(e => {
                if (repname.repname == e.name) {
                    currentRep = {...e}
                    console.log("dacurrentRep: " + JSON.stringify(currentRep))
               }
            })
        }
        console.log("lastcurrentRep: " + JSON.stringify(currentRep))
        finalRep = getProAsync(currentRep, repname)
    }, [])   


    var getProAsync = async (data ) => { 
        let apple = await proPublica(data, repname)
        console.log("type: " + typeof data)
        console.log("type: " + typeof repname)

        console.log("applestick: " + JSON.stringify(apple))
     }
        // const getProPublica = async () => {
            
        // }
       

 

        


    if (proResult != undefined) {
        return (
            <div>{currentRep}</div>
        )
    }
    else {
        return (
            <p>no proResult</p>
        )
    }

}

export default RepProPublica;