import { DESCRIPTION_CHANGED } from "./actionTypes"

export default function descriptionAction(description) {
    return {
        type: DESCRIPTION_CHANGED,
        payload: description
    }
}
