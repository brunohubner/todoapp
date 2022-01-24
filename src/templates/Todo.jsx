import "../styles/Todo.css"
import Footer from "./Footer"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"

export default function Todo(props) {
    return (
        <div className="todo">
            <div className="tasks">
                <TodoForm />
                <TodoList />
            </div>
            <Footer path="/about" label="Sobre"></Footer>
        </div>
    )
}
