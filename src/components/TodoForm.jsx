import "../styles/TodoForm.css"
import React from "react";

export default function TodoForm(props) {
    return (
        <div className="form">
            <input type="text" placeholder="Adicione uma tarefa"/>
            <button>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    )
}