/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/TodoList.css"
import React, { useEffect } from "react"
import IconButton from "./IconButton"
import { connect } from "react-redux"
import {
    markAsPendingAction,
    refreshListAction,
    markAsDoneAction,
    removeAction
} from "../store/actions/listAction"

function TodoList(props) {
    const {
        remove,
        markAsDone,
        markAsPending,
        refreshList,
        list,
        description
    } = props

    useEffect(() => {
        refreshList()
    }, [])

    function renderRows() {
        const newList = list || []

        return newList.map(task => {
            return (
                <tr key={task._id} className={task.done ? "mark-as-done" : ""}>
                    <td className="task">{task.description}</td>
                    <td className="buttons">
                        <IconButton
                            onClick={() => markAsDone(task, description)}
                            icon="check"
                            color="#4caf50"
                            hide={task.done}
                        ></IconButton>
                        <IconButton
                            onClick={() => markAsPending(task, description)}
                            icon="undo"
                            color="#00fa"
                            hide={!task.done}
                        ></IconButton>
                        <IconButton
                            onClick={() => remove(task._id, description)}
                            icon="trash-o"
                            color="#f44336"
                            hide={!task.done}
                        ></IconButton>
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="todo-list">
            <tbody>{renderRows()}</tbody>
        </table>
    )
}

function mapDispatchToProps(dispatch) {
    async function refreshList(description) {
        const action = await refreshListAction(description)
        dispatch(action)
    }

    async function markAsPending(task, description) {
        const action = await markAsPendingAction(task, description)
        dispatch(action)
    }

    async function markAsDone(task, description) {
        const action = await markAsDoneAction(task, description)
        dispatch(action)
    }

    async function remove(_id, description) {
        const action = await removeAction(_id, description)
        dispatch(action)
    }

    return { refreshList, markAsPending, markAsDone, remove }
}

function mapStateToProps(state) {
    return {
        list: state.list,
        description: state.description
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
