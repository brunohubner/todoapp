import { useContext } from "react"
import AppContext from "../context/AppContext"
import useTodo from "./useTodo"

export default function useKeyBoardListener() {

    const { search, add, clear } = useTodo()
    const { description } = useContext(AppContext)

    function keyHandler(event) {
        if(event.key === "Enter") {
            event.shiftKey ? search(description) : add(description)
        } else if(event.key === "Escape") {
            clear()
        }
    }

    return { keyHandler }
}