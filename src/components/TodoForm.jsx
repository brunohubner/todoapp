import "../styles/TodoForm.css"
import React from "react";
import IconButton from "./IconButton";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import useKeyBoardListener from "../hooks/useKeyBoardListener";
import { connect } from "react-redux";
import descriptionAction from "../store/actions/descriptionAction"

function TodoForm(props) {
    const { description } = useContext(AppContext)
    const { add, search, clear } = props.onClick
    const { keyHandler } = useKeyBoardListener()

    return (
        <div className="form">
            <input type="text" 
                value={props.description}
                onChange={e => props.changeDescription(e)}
                onKeyUp={keyHandler}
                placeholder="Adicione uma tarefa"
                maxLength={45} />
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
                    onClick={() => clear(description)}></IconButton>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        changeDescription(description) {
            const action = descriptionAction(description)
            dispatch(action)
        }
    }
}

function mapStateToProps(state) {
    return {
        description: state.description
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)