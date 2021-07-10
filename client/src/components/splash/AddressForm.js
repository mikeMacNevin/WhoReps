import React, { useState, useContext } from 'react'
import GoogleCivicContext from '../../context/civic/googleCivicContext'
import '../reps/Rep.scss';


const AddressForm = () => {

    const googleCivicContext = useContext(GoogleCivicContext)
    const { reps, searchAddress } = googleCivicContext;
    
    const [text, setText] = useState('')
    
    //
    const onSubmit = e => {
        e.preventDefault()
        if (text === '') {
            console.log('no text entered')
        } else {
            googleCivicContext.searchAddress(text)
            setText('')
            console.log("AddressForm: Address Input Submitted")

        }
    }

    // change the state of 'text' from text input bar
    const onChange = e => setText(e.target.value)

    if(reps.length < 3) {
        return (
            <div className="address-form">
                <div className="address-inner-container">
                    <div class="text-left w-100"> 
                        <h1>Who</h1>
                        <h1>Governs</h1>
                        <h1>You?</h1>
                    </div>
        
                    <form onSubmit={onSubmit} className="form form-inline">
                        <div class="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="addressInput"
                                placeholder="home address" 
                                value={text}
                                onChange={onChange} 
                            />
                        </div>
                        <div class="form-group">
                            <button className="btn btn-primary">   
                                <input
                                    type='submit'
                                    value='Search'
                                />
                            </button>
                        </div>
                        <div class="form-group-small d-none">
                            <button className="btn btn-primary mt-0">   
                                <input
                                    type='submit'
                                    value='Search'
                                />
                            </button>
                        </div>
                    </form>
                </div>
             </div>
        )
    }
    else{
        return(
            <div className="address-form">
                <div className="no-address-form">
                    <div></div>
                </div>
            </div>
        )
    }
   
}

export default AddressForm;