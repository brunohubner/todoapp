import { MARKED_AS_DONE, MARKED_AS_PENDING, 
    TASKS_REFRESHED, TASK_ADDED, TASK_REMOVED, 
    TASK_SEARCHED } from "../actions/actionTypes"

const INITIAL_STATE = []

export default function listReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TASK_ADDED:
        case TASK_SEARCHED:
        case TASKS_REFRESHED:
        case MARKED_AS_DONE:
        case MARKED_AS_PENDING:
        case TASK_REMOVED:
            return action.payload
        default:
            return state
    } 
}