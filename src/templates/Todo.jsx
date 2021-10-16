import "../styles/Todo.css"
import Footer from "./Footer";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import useTodo from "../hooks/useTodo"

export default function Todo(props) {

    const { description, setDescription, list } = useContext(AppContext)
    const { add, remove, markAsDone, markAsPending, search, clear } = useTodo()

    return (
        <div className="todo">
            <div className="tasks">
                <TodoForm 
                    description={description}
                    setDescription={setDescription} 
                    onClick={{ add, search, clear }} ></TodoForm>
                <TodoList 
                    onClick={{ remove, markAsDone, markAsPending }} 
                    list={list}></TodoList>
            </div>
            <Footer path="/about" label="Sobre"></Footer>
        </div>
    )
}