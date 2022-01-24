import { DESCRIPTION_CHANGED } from "../actions/actionTypes"

const INITIAL_STATE = ""

export default function descriptionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case DESCRIPTION_CHANGED:
            return action.payload
        default:
            return state
    }
}
