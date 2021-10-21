import { DESCRIPTION_CHANGED } from "./actionTypes"

export default function descriptionAction(event) {
    return {
        type: DESCRIPTION_CHANGED,
        payload: event.target.value
    }
}