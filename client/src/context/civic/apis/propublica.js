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
            debugger;
            console.log("response1 butt:"  + JSON.stringify(responses[0]))
            console.log("response2 asshole:"  + JSON.stringify(responses[1]))

            let proPubReps = responses[0].data.results[0].members.concat(responses[1].data.results[0].members)
            console.log("resProPublica proPubConcat: " + JSON.stringify(proPubReps))

            returnValue = filterPro(proPubReps, googleCivicData)

        // console.log("and thennnn: " + JSON.stringify(filterPro(resp, resData))) 
    }))
    console.log("proPublica right before return: " + JSON.stringify(returnValue))
    return returnValue
} 
    
var filterPro = function(proPubReps, googleData) {
    console.log("blah")

    var googleName;

    var googleReps;

    function nameSomeVars() {
        googleName = googleData.thisRep.name;
        googleReps = googleData.thisRep
        googleState = googleData.thisRep.stateId
    }

    nameSomeVars()

    //Gets stateId by taking first rep from googleData and taking it's state Id
    var googleState = '' 


    console.log("google state: " + googleState)
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
        console.log("stuff i: " + i)
        console.log("stuff e: " + JSON.stringify(e))

        let repTitle = e.title.split(',')[0].toLowerCase()

        if  ( (repTitle == "senator" || "representative") && (googleName.includes(firstName)) && (googleName.includes(lastName)) ) {           
            console.log("jellytime")
            console.log("firstName: " + firstName)
            console.log("jellystuff: " + JSON.stringify(e))
     
            googleReps.date_of_birth = e.date_of_birth
            googleReps.missed_votes = e.missed_votes
            return googleReps
        }

    })

    console.log("proPublica.js: googleReps before return: " + JSON.stringify(googleReps))
    return googleReps
}  

        //    let name = f.name
        //    let repTitle = e.title.split(',')[0].toLowerCase()

        //  if  ( (repTitle == "senator" || "representative") && (name.includes(firstName)) && (name.includes(lastName)) ) {           
        //  }
            // googleReps.forEach( (f, j) => {

            //     // collects all senators | reps with first name matching
            //     if  ( (repTitle == "senator" || "representative") && (name.includes(firstName)) && (name.includes(lastName)) ) {
            //         if (repTitle == "representative")
            //         googleReps[j].missed_votes = filteredState[i].missed_votes
            //         googleReps[j].Next_election = filteredState[i].Next_election
            //         googleReps[j].total_votes = filteredState[i].total_votes
            //         googleReps[j].total_present = filteredState[i].total_present
            //         googleReps[j].Votes_with_party_pct = filteredState[i].Votes_with_party_pct
            //         googleReps[j].votes_against_party_pct = filteredState[i].votes_against_party_pct
            //         googleReps[j].State_rank = filteredState[i].State_rank
            //         //renamed office
            //         googleReps[j].officeAddress = filteredState[i].office
                 


            //        console.log("propublica.js: senator")
            //        console.log("jmoney " + JSON.stringify(filteredState[i]))
            //     }
            //     console.log("proPublica.js proPubReps: hey " + JSON.stringify(proPubReps))

            // })



