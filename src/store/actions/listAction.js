import MongoDB from "../../database/mongodb";
import { MARKED_AS_DONE, MARKED_AS_PENDING, TASKS_REFRESHED,
    TASK_ADDED, TASK_REMOVED, TASK_SEARCHED } from "./actionTypes";

const task = new MongoDB()

async function addListAction(description) {
    await task.add(description)
    const list = await task.getAll()

    return {
        type: TASK_ADDED,
        payload: list
    }
}

async function searchListAction(description) {
    const list = await task.getAll(description)

    return {
        type: TASK_SEARCHED,
        payload: list
    }
}

async function refreshListAction(description) {
    const list = await task.getAll(description)

    return {
        type: TASKS_REFRESHED,
        payload: list
    }
}

async function markAsDoneAction(taskD, description) {
    await task.update(taskD, true)
    const list = await task.getAll(description)

    return {
        type: MARKED_AS_DONE,
        payload: list
    }
}

async function markAsPendingAction(taskD, description) {
    await task.update(taskD, false)
    const list = await task.getAll(description)
    
    return {
        type: MARKED_AS_PENDING,
        payload: list
    }
}

async function removeAction(_id, description) {
    await task.remove(_id)
    const list = await task.getAll(description)
    
    return {
        type: TASK_REMOVED,
        payload: list
    }
}

export { addListAction, searchListAction, refreshListAction,
    markAsDoneAction, markAsPendingAction, removeAction }