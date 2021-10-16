import "../styles/TodoList.css"
import React from "react";
import IconButton from "./IconButton";

export default function TodoList(props) {

    const { remove, markAsDone, markAsPending } = props.onClick

    function renderRows() {
        const list = props.list || []
        
        return list.map(task => {
            return (
                <tr key={task._id} className={task.done ? "mark-as-done" : ""}>
                    <td className="task">{ task.description }</td> 
                    <td className="buttons">
                        <IconButton 
                            onClick={() => markAsDone(task)} 
                            icon="check" 
                            color="#0f0e" 
                            hide={task.done}></IconButton>                              
                        <IconButton 
                            onClick={() => markAsPending(task)} 
                            icon="undo" 
                            color="#f8e" 
                            hide={!task.done}></IconButton>                              
                        <IconButton 
                            onClick={() => remove(task._id)} 
                            icon="trash-o" 
                            color="#f00e" 
                            hide={!task.done}></IconButton>                              
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="todo-list">
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}