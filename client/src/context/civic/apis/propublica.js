import axios from 'axios'

export default async function proPublica(googleCivicData) {
    let finalResult;
    // PRO PUBLICA
    let returnValue = []
    console.log("proPublica.js: top of proPublica(googleCivicData): " + JSON.stringify(googleCivicData))
    let senateUrl = 'https://api.propublica.org/congress/v1/117/senate/members.json';
    let houseUrl = 'https://api.propublica.org/congress/v1/117/house/members.json'

    let getSenate = axios.get(senateUrl,{ headers: { 'X-API-Key': 'xehBDsPnNx2F4CKjwq9spiSC6QZDZ5AWH7m9UQpM'} })
    let getHouse = axios.get(houseUrl,{ headers: { 'X-API-Key': 'xehBDsPnNx2F4CKjwq9spiSC6QZDZ5AWH7m9UQpM'} })

    let resProPublica = await axios.all([getSenate, getHouse])
        .then(axios.spread((...responses) => {
            console.log("response1 butt:"  + JSON.stringify(responses[0]))
            console.log("response1 asshole:"  + JSON.stringify(responses[1]))

            let proPubReps = responses[0].data.results[0].members.concat(responses[1].data.results[0].members)
            console.log("resProPublica googleConcat: " + JSON.stringify(proPubReps))

            returnValue = filterPro(proPubReps, googleCivicData)

        // console.log("and thennnn: " + JSON.stringify(filterPro(resp, resData))) 
    }))


    console.log("proPublica right before return: " + JSON.stringify(returnValue))
    return returnValue

} 
    
var filterPro = function(proPubReps, googleData) {
    console.log("proPublica.js proPubReps: " + JSON.stringify(proPubReps))
    console.log("proPublica.js googleReps: " + JSON.stringify(googleData))
    console.log("blah")

    console.log("stooopid: " + googleData[0].stateId)

    var googleReps = googleData
    //Gets stateId by taking first rep from googleData and taking it's state Id
    var googleState = googleData[0].stateId
    
    // googleData.normalizedInput.state

    // state matching condition for filter
    function filter_by_state(member) {
        return member.state == googleState
    }
    console.log("proPublica.js proPubReps: " + JSON.stringify(proPubReps))

    // filter by state
    var filteredState = proPubReps.filter(filter_by_state)

    console.log("proPublica.js filteredState: " + JSON.stringify(filteredState))
    filteredState.forEach((e, i, arr) => {
            let lastName = e.last_name
            let firstName = e.first_name
           console.log("i: " + i)
    
            googleReps.forEach( (f, j) => {
                let name = f.name
                let senator = e.title.split(',')[0].toLowerCase()
    
    
                if (  (senator == "senator") && (name.includes(firstName)) && (name.includes(lastName)) ) {
                    googleReps[j].missed_votes = filteredState[i].missed_votes
                   console.log("propublica.js: senator")
                }

            })
        })

        console.log("proPublica.js: googleReps before return: " + JSON.stringify(googleReps))
        return googleReps
    }  


