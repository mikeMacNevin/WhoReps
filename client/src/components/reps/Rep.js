import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import ProPublicaContext from '../../context/propublica/proPublicaContext';
import Reps from './reps';

const Rep = ( {rep } ) => {

    const proPublicaContext = useContext(ProPublicaContext)
    const { repPro, getProPublicaData } = proPublicaContext;

    const [text, setText] = useState('')
    
    const {name,  party, officeName, id, missed_votes } = rep

    useEffect( () => {
        if (rep != undefined) {
            console.log("repPro: " + repPro)
            proPublicaContext.getProPublicaData(repPro)
            
            console.log("repPro filled")
        }
        else {
            console.log('rep.js proPublicaContext:')

        }
    })

    // console.log("Rep.js: " + JSON.stringify(rep))
    return (
        //Representative Basic info & Link to RepPage.js 
        <div className="Rep mx-auto mt-4">
            <p className="mb-0 under">{officeName}</p>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                <p className="mb-0">{name}</p>
                <p className="mb-0 second">{party}</p>
                </div> 
                <Link to={`rep/${name}`}>
                    <button type="button" className="btn btn-outline-primary btn">View</button>
                </Link>

            </div>
            <div className="d-flex justify-content-between align-items-center">
          
            </div>
            {/* <img src ={photoUrl}></img> */}

            
        </div>

    )
 }

 export default Rep