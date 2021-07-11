import {
    PRO_PUBLICA,
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case PRO_PUBLICA:
            console.log("proPublica: PRO_PUBLUICA triggered ---")
            return {
                ...state,
                repPro: action.payload
            }

        default:
            return state
    }
}