/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import AppContext from "../context/AppContext"
import MongoDB from "../database/mongodb"

const task = new MongoDB()

export default function useTodo() {

    const { description, setDescription, setList } = useContext(AppContext)
    
    useEffect(refresh, [])
    
    async function add(description) {
        if(!description) return
        await task.add(description)
        refresh()
    }

    async function getAll(description) {
        const newList = await task.getAll(description)
        setList(newList)
    }

    async function remove(_id) {
        await task.remove(_id)
        refresh(description)
    }

    function refresh(description = "") {
        getAll(description)
        setDescription(description)
    }

    async function markAsDone(taskD) {
        await task.update(taskD, true)
        refresh(description)
    }

    async function markAsPending(taskD) {
        await task.update(taskD, false)
        refresh(description)
    }

    function search(description) {
        refresh(description)
    }

    function clear() {
        refresh()
    }    

    return {
        add, getAll, remove, refresh, markAsDone, markAsPending, search, clear
    }
}