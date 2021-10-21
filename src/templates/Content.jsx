import Todo from "./Todo";
import About from "./About";
import React from "react";
import { Switch, Route } from "react-router-dom"

export default function Content(props) {
    return (
        <div className="content">
            <Switch>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/">
                    <Todo></Todo>
                </Route>
            </Switch>
        </div>
    )
}