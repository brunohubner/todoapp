import "../styles/TodoForm.css"
import React from "react";
import IconButton from "./IconButton";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import useKeyBoardListener from "../hooks/useKeyBoardListener";

export default function TodoForm(props) {
    const { description } = useContext(AppContext)
    const { add, search, clear } = props.onClick
    const { keyHandler } = useKeyBoardListener()

    return (
        <div className="form">
            <input type="text" 
                value={props.description}
                onChange={e => props.setDescription(e.target.value)}
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
                    onClick={() => clear(description)}></IconButton>
            </div>
        </div>
    )
}