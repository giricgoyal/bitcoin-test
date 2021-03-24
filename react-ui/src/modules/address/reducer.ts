import * as actionTypes from './action-types'

const initialState = {
    transactions: []
}

const address = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ADDRESS_TRANSACTIONS: {
            return {
                ...state,
                transactions: action.payload,
            }
        }
        default: {
            return state
        }
    }

}

export default {
    address
}