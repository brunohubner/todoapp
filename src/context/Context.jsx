import React, { useState } from "react"
import AppContext from "./AppContext"
import { initialDescription, initialList } from "./initialAppState"

export default function Context(props) {
    const [description, setDescription] = useState(initialDescription)
    const [list, setList] = useState(initialList)

    return (
        <AppContext.Provider
            value={{
                description,
                setDescription,
                list,
                setList
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
