/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import AppContext from "../context/AppContext"
import LocalDB from "../database/localdb"

const task = new LocalDB()

export default function useTodo() {
    const { description, setDescription, setList } = useContext(AppContext)

    useEffect(refresh, [])

    function add(description) {
        if (!description.trim() || description.length > 32) return
        task.add(description)
        refresh()
    }

    function getAll(description) {
        const newList = task.getAll(description)
        setList(newList)
    }

    function remove(_id) {
        task.remove(_id)
        refresh(description)
    }

    function refresh(description = "") {
        getAll(description)
        setDescription(description)
    }

    function markAsDone(taskD) {
        task.update(taskD, true)
        refresh(description)
    }

    function markAsPending(taskD) {
        task.update(taskD, false)
        refresh(description)
    }

    function search(description) {
        refresh(description)
    }

    function clear() {
        refresh()
    }

    return {
        add,
        getAll,
        remove,
        refresh,
        markAsDone,
        markAsPending,
        search,
        clear
    }
}
