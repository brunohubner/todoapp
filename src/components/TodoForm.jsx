import "../styles/TodoForm.css"
import React from "react";
import IconButton from "./IconButton";
import { connect } from "react-redux";
import descriptionAction from "../store/actions/descriptionAction"
import { addListAction, searchListAction, refreshListAction } from "../store/actions/listAction"

function TodoForm(props) {

    const { description, changeDescription, add, search, clear} = props

    function keyHandler(event) {
        if(event.key === "Enter") {
            event.shiftKey ? search(description) : add(description)
        } else if(event.key === "Escape") {
            clear()
        }
    }

    return (
        <div className="form">
            <input type="text"
                value={description}
                onChange={e => changeDescription(e.target.value)}
                onKeyUp={keyHandler}
                placeholder="Adicione uma tarefa"
                maxLength={32} />
            <div className="buttons">
                <IconButton
                    icon="plus"
                    color="#00fa"
                    onClick={() => add(description)}></IconButton>
                <IconButton
                    icon="search"
                    color="#00fa"
                    onClick={() => search(description)}></IconButton>
                <IconButton
                    icon="close"
                    color="#00fa"
                    onClick={() => clear()}></IconButton>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {

    function changeDescription(description) {
        const action = descriptionAction(description)
        dispatch(action)
    }

    async function add(description) {
        if(!description.trim() || description.length > 32) return
        const action = await addListAction(description)
        dispatch(action)
        clear()
    }

    async function search(description) {
        if(!description) return
        const action = await searchListAction(description)
        dispatch(action)
    }

    async function clear() {
        const action = await refreshListAction()
        dispatch(action)
        changeDescription("")
    }


    return { changeDescription, add, search, clear }
}

function mapStateToProps(state) {
    return {description: state.description }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)